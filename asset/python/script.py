@app.route('/webhook', methods=['POST'])
def webhook():
    webhook_data = request.get_json()
    payment_id = webhook_data.get('data', {}).get('id')

    if payment_id:
        payment_info = sdk.payment().get(payment_id)
        payment_status = payment_info["response"].get("status")

        app.logger.info(f'Webhook recibido: {webhook_data}')
        app.logger.info(f'Estado del pago: {payment_status}')

        if payment_status == 'approved':
            if pending_songs:
                # Obtener y procesar la última canción añadida al diccionario
                last_preference_id = list(pending_songs.keys())[-1]
                song_name = pending_songs.pop(last_preference_id)

                # Agregar la canción a la hoja de cálculo
                current_time = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
                sheet = client.open("PEDILA").sheet1
                sheet.append_row([current_time, song_name])
                app.logger.info(f'Canción agregada a Google Sheets: {song_name}')
                return '', 200
            else:
                app.logger.warning('No hay canciones pendientes para procesar')
                return '', 200
        else:
            app.logger.warning(f'Pago no aprobado para el payment_id: {payment_id}')
            return '', 200
    else:
        app.logger.error('Webhook recibido sin payment_id')
        return '', 400
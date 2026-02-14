Se utilizaron las Herramientas de Desarrollo del navegador para inspeccionar el funcionamiento de la aplicación.

En la pestaña Console, se verificó que la aplicación no presenta errores en tiempo de ejecución. Los mensajes mostrados corresponden únicamente a logs de control y manejo de excepciones.

En la pestaña Network, se observó que los archivos de audio se cargan únicamente cuando el usuario interactúa con la interfaz (click en los acordes), lo que optimiza el uso de recursos y evita cargas innecesarias al inicio.

Como oportunidad de mejora, se podría implementar precarga selectiva (preload) de audios o compresión de imágenes para reducir aún más los tiempos de carga en conexiones lentas.

<img width="1919" height="1018" alt="Captura de pantalla 2026-02-13 233509" src="https://github.com/user-attachments/assets/d5009b19-e328-4af9-8667-cccea905cd39" />

<img width="1913" height="1019" alt="Captura de pantalla 2026-02-13 233305" src="https://github.com/user-attachments/assets/bdc48f32-e0b7-43ae-989d-1f718f09772c" />

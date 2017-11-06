$(function() {

	  function getTypeDevice() {
//Создаем объект 'user', который будет содержать информацию Detect.js
//Вызываем detect.parse() с navigator.userAgent в качестве аргумента
        var user = detect.parse(navigator.userAgent);

//Определение типа устройства
        var deviceType = user.device.type;
        var deviceOs = user.os.family;

        console.log(deviceOs);
        console.log(deviceType);

        //$('.link').hide();

        if(deviceType == 'Desktop'){
        	$('.desktop').removeClass('hidden');
        }
        if(deviceOs == 'Android') {
        	$('.google').removeClass('hidden');
        	var conf = confirm('Загрузить приложение на Ваше устройство?');
        	if (conf == true) {

        		location.href = 'https://play.google.com/store/apps/details?id=ru.rosfines.android';

        	}

        }
        if(deviceOs == 'iOS') {
        	$('.appstore').removeClass('hidden');

        }




    }

    getTypeDevice();

});

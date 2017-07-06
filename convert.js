/*!
 * convert.js 0.0.3
 * Authors: Ertuğrul Üngör, Yakup Ad ,Yasin Duvarcı, Okan Davut, Ahmet Fatih Eraslan, Oğuzhan Yilmaz
 * Supporters: Palash Mondal, Berke Emrecan Arslan, Ahmet Urgancı
 */

;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(function() {
            return (root.convert = factory());
        });
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.convert = factory();
    }
}(this, function() {
    var convert = {};
    convert.VERSION = '0.0.3';

    function isNumber(data) {
        return toString.call(data) === '[object Number]';
    }

    // This function is used to check if the variable passed is a string or not
    // additionally it checks for if the value is not null or undefined or any falsy value
    function isStringVariable(value) {
        return !!value && (typeof value === 'string' || value instanceof String);
    }

    //Metric Convert
    function cm(data, target) {
        target = target.toLowerCase();
        if (target === 'km') return data * 0.00001;
        else if (target === 'hm') return data * 0.0001;
        else if (target === 'dam') return data * 0.001;
        else if (target === 'm') return data * 0.01;
        else if (target === 'dm') return data * 0.1;
        else if (target === 'mm') return data * 10;
        else if (target === 'inch') return data * 0.39370078740157;
        else if (target === 'feet') return data * 0.032808398950131;
        else if (target === 'yard') return data * 0.010936132983377;
        else return false;
    }

    function km(data, target) {
        target = target.toLowerCase();
        //metric
        if (target === 'cm') return data * 100000;
        else if (target === 'hm') return data * 10;
        else if (target === 'dam') return data * 100;
        else if (target === 'm') return data * 1000;
        else if (target === 'dm') return data * 10000;
        else if (target === 'mm') return data * 1000000;
        else if (target === 'inch') return data * 39370.078740157;
        else if (target === 'feet') return data * 3280.8398950131;
        else if (target === 'yard') return data * 1093.6132983377;
        //Astronomical
        else if (target === 'au96') return data * 6.6845871227e-9;
        else if (target === 'lightsecond') return data * 0.000003335640952;
        else if (target === 'lightminute') return data * 5.5594015866e-8;
        else if (target === 'lighthour') return data * 9.2656693111e-10;
        else if (target === 'lightday') return data * 3.8606955463e-11;
        else if (target === 'lightyear_julian') return data * 1.057000834e-13;
        else if (target === 'lightyear_tropical') return data * 1.0570234105e-13;
        else if (target === 'lightyear_traditional') return data * 1.0577248072e-13;
        else if (target === 'parsec') return data * 3.2407793877e-14;
        else if (target === 'mile') return data * 0.62137119224;
        else return false;
    }

    function hm(data, target) {
        target = target.toLowerCase();
        if (target === 'cm') return data * 10000;
        else if (target === 'km') return data * 0.1;
        else if (target === 'dam') return data * 10;
        else if (target === 'm') return data * 100;
        else if (target === 'dm') return data * 1000;
        else if (target === 'mm') return data * 100000;
        else if (target === 'inch') return data * 3937.0078740157;
        else if (target === 'feet') return data * 328.08398950131;
        else if (target === 'yard') return data * 109.36132983377;
        else return false;
    }

    function dam(data, target) {
        target = target.toLowerCase();
        if (target === 'cm') return data * 1000;
        else if (target === 'km') return data * 0.01;
        else if (target === 'hm') return data * 0.1;
        else if (target === 'm') return data * 10;
        else if (target === 'dm') return data * 100;
        else if (target === 'mm') return data * 10000;
        else if (target === 'inch') return data * 393.70078740157;
        else if (target === 'feet') return data * 32.808398950131;
        else if (target === 'yard') return data * 10.936132983377;
        else return false;
    }

    function m(data, target) {
        target = target.toLowerCase();
        //Metric
        if (target === 'cm') return data * 100;
        else if (target === 'km') return data * 0.001;
        else if (target === 'hm') return data * 0.01;
        else if (target === 'dam') return data * 0.1;
        else if (target === 'dm') return data * 10;
        else if (target === 'mm') return data * 1000;
        else if (target === 'inch') return data * 39.370078740157;
        else if (target === 'feet') return data * 3.2808398950131;
        else if (target === 'yard') return data * 1.0936132983377;
        //Astronomical
        else if (target === 'au96') return data * 6.6845871227e-12;
        else if (target === 'lightsecond') return data * 3.335640952e-9;
        else if (target === 'lightminute') return data * 5.5594015866e-11;
        else if (target === 'lighthour') return data * 9.2656693111e-13;
        else if (target === 'lightday') return data * 3.8606955463e-14;
        else if (target === 'lightyear_julian') return data * 1.057000834e-16;
        else if (target === 'lightyear_tropical') return data * 1.0570234105e-16;
        else if (target === 'lightyear_traditional') return data * 1.0577248072e-16;
        else if (target === 'parsec') return data * 3.2407793877e-17;
        else if (target === 'mile') return data * 0.00062137119224;
        else return false;
    }

    function mm(data, target) {
        target = target.toLowerCase();
        if (target === 'cm') return data * 0.1;
        else if (target === 'km') return data * 0.000001;
        else if (target === 'hm') return data * 0.00001;
        else if (target === 'dam') return data * 0.0001;
        else if (target === 'dm') return data * 0.01;
        else if (target === 'm') return data * 0.001;
        else if (target === 'inch') return data * 0.039370078740157;
        else if (target === 'feet') return data * 0.0032808398950131;
        else if (target === 'yard') return data * 0.0010936132983377;
        else return false;
    }

    function inch(data, target) {
        target = target.toLowerCase();
        if (target === 'cm') return data * 2.54;
        else if (target === 'km') return data * 0.0000254;
        else if (target === 'hm') return data * 0.000254;
        else if (target === 'dam') return data * 0.00254;
        else if (target === 'dm') return data * 0.254;
        else if (target === 'm') return data * 0.0254;
        else if (target === 'mm') return data * 25.4;
        else if (target === 'feet') return data * 0.083333333333333;
        else if (target === 'yard') return data * 0.027777777777778;
        else return false;
    }

    function feet(data, target) {
        target = target.toLowerCase();
        if (target === 'cm') return data * 30.48;
        else if (target === 'km') return data * 0.0003048;
        else if (target === 'hm') return data * 0.003048;
        else if (target === 'dam') return data * 0.03048;
        else if (target === 'dm') return data * 3.048;
        else if (target === 'm') return data * 0.3048;
        else if (target === 'mm') return data * 304.8;
        else if (target === 'inch') return data * 12;
        else if (target === 'yard') return data * 0.33333333333333;
        else return false;
    }

    function yard(data, target) {
        target = target.toLowerCase();
        if (target === 'cm') return data * 91.44;
        else if (target === 'km') return data * 0.0009144;
        else if (target === 'hm') return data * 0.009144;
        else if (target === 'dam') return data * 0.09144;
        else if (target === 'dm') return data * 9.144;
        else if (target === 'm') return data * 0.9144;
        else if (target === 'mm') return data * 914.4;
        else if (target === 'inch') return data * 36;
        else if (target === 'feet') return data * 3;
        else return false;
    }

    convert.Metric = function(data, source, target) {
        if (isNumber(data)) {
            if (!source || !target || !isStringVariable(source) || !isStringVariable(target)) return false;
            source = source.toLowerCase();
            target = target.toLowerCase();
            if(source===target) return data;
            if (source === 'cm') return cm(data, target);
            else if (source === 'km') return km(data, target);
            else if (source === 'hm') return hm(data, target);
            else if (source === 'm') return m(data, target);
            else if (source === 'mm') return m(data, target);
            else if (source === 'inch') return inch(data, target);
            else if (source === 'feet') return feet(data, target);
            else if (source === 'yard') return yard(data, target);
            else return false;
        } else return false;
    };

    //Data Unit Storage Convert
    function byte(data, target) {
        target = target.toLowerCase();
        if (target === 'kb') return data * 0.0009765625;
        else if (target === 'mb') return data * 0.00000095367431640625;
        else if (target === 'gb') return data * 0.00000000093132257461548;
        else if (target === 'tb') return data * 0.00000000000090949470177293;
        else if (target === 'pb') return data * 0.00000000000000088817841970013;
        else return false;
    }

    function kb(data, target) {
        target = target.toLowerCase();
        if (target === 'byte') return data * 1024;
        else if (target === 'mb') return data * 0.0009765625;
        else if (target === 'gb') return data * 0.00000095367431640625;
        else if (target === 'tb') return data * 0.00000000093132257461548;
        else if (target === 'pb') return data * 0.00000000000090949470177293;
        else return false;
    }

    function mb(data, target) {
        target = target.toLowerCase();
        if (target === 'byte') return data * 1048576;
        else if (target === 'kb') return data * 1024;
        else if (target === 'gb') return data * 0.0009765625;
        else if (target === 'tb') return data * 0.00000095367431640625;
        else if (target === 'pb') return data * 0.00000000093132257461548;
        else return false;
    }

    function gb(data, target) {
        target = target.toLowerCase();
        if (target === 'byte') return data * 1073741824;
        else if (target === 'kb') return data * 1048576;
        else if (target === 'mb') return data * 1024;
        else if (target === 'tb') return data * 0.0009765625;
        else if (target === 'pb') return data * 0.00000095367431640625;
        else return false;
    }

    function tb(data, target) {
        target = target.toLowerCase();
        if (target === 'byte') return data * 1099511627776;
        else if (target === 'kb') return data * 1073741824;
        else if (target === 'mb') return data * 1048576;
        else if (target === 'gb') return data * 1024;
        else if (target === 'pb') return data * 0.0009765625;
        else return false;
    }

    function pb(data, target) {
        target = target.toLowerCase();
        if (target === 'byte') return data * 1125899906842600;
        else if (target === 'kb') return data * 1099511627776;
        else if (target === 'mb') return data * 1073741824;
        else if (target === 'gb') return data * 1048576;
        else if (target === 'tb') return data * 1024;
        else return false;
    }

    convert.DataUnits = function(data, source, target) {
        if (isNumber(data)) {
            if (!source || !target || !isStringVariable(source) || !isStringVariable(target)) return false;
            source = source.toLowerCase();
            target = target.toLowerCase();
            if(source===target) return data;
            if (source === 'byte') return byte(data, target);
            else if (source === 'kb') return kb(data, target);
            else if (source === 'mb') return mb(data, target);
            else if (source === 'gb') return gb(data, target);
            else if (source === 'pb') return pb(data, target);
            else return false;
        } else return false;
    };

    //Temperature convert
    function c(data, target) {
        target = target.toLowerCase();
        if (target === 'k') return data + 273.15;
        else if (target === 'f') return 1.8 * data + 32;
        else if (target === 'n') return data * 0.33;
        else return false;
    }

    function k(data, target) {
        target = target.toLowerCase();
        if (target === 'c') return data - 273.15;
        else if (target === 'f') return 9 * data / 5 - 459.67;
        else if (target === 'n') return 0.33 * (data - 273.15);
        else return false;
    }

    function f(data, target) {
        target = target.toLowerCase();
        if (target === 'c') return 5 * (data - 32) / 9;
        else if (target === 'k') return 5 * (data + 459.67) / 9;
        else if (target === 'n') return 0.18333 * (data - 32);
        else return false;
    }

    function n(data, target) {
        target = target.toLowerCase();
        if (target === 'c') return data / 0.33;
        else if (target === 'k') return data / 0.33 + 273.15;
        else if (target === 'f') return 0.18333 * (data - 32);
        else return false;
    }

    convert.Temperature = function(data, source, target) {
        if (isNumber(data)) {
            if (!source || !target || !isStringVariable(source) || !isStringVariable(target)) return false;
            source = source.toLowerCase();
            target = target.toLowerCase();
            if(source===target) return data;
    	    if (source === 'c') return c(data, target);
            else if (source === 'k') return k(data, target);
            else if (source === 'f') return f(data, target);
            else if (source === 'n') return n(data, target);
            else return false;
        } else return false;
    };

    //Angle convert
    function deg(data, target) {
        target = target.toLowerCase();
        if (target === 'rad') return (Math.PI / 180) / data;
        else if (target === 'grad') return ((Math.PI / 180) / (Math.PI / 200)) * data;
        else if (target === 'minute') return data * 60;
        else if (target === 'second') return data * 3600;
        else return false;
    }

    function rad(data, target) {
        target = target.toLowerCase();
        if (target === 'deg') return (data * 180) / Math.PI;
        else if (target === 'grad') return data / (Math.PI / 200);
        else if (target === 'minute') return data / (Math.PI / (180 * 60));
        else if (target === 'second') return data / (Math.PI / (180 * 3600));
        else return false;
    }

    function grad(data, target) {
        target = target.toLowerCase();
        if (target === 'deg') return ((Math.PI / 200) / (Math.PI / 180)) * data;
        else if (target === 'rad') return (Math.PI / 200) / data;
        else if (target === 'minute') return ((Math.PI / 200) / (Math.PI / (180 * 60))) * data;
        else if (target === 'second') return ((Math.PI / 200) / (Math.PI / (180 * 3600))) * data;
        else return false;
    }


    function minute(data, target) {
        target = target.toLowerCase();
        //angle
        if (target === 'deg') return ((Math.PI / (180 * 60)) / (Math.PI / 180)) * data;
        else if (target === 'grad') return ((Math.PI / (180 * 60)) / (Math.PI / 200)) * data;
        else if (target === 'rad') return (Math.PI / (180 * 60)) / data;
        else if (target === 'second') return ((Math.PI / (180 * 60)) / (Math.PI / (180 * 3600))) * data;
        //time
        else if (target === 'century') return data * 0.000000019012852688417;
        else if (target === 'day') return data * 0.00069444444444444;
        else if (target === 'week') return data * 0.000099206349206349;
        else if (target === 'millisecond') return data * 60000;
        else if (target === 'hour') return data * 0.016666666666667;
        else if (target === 'second') return data * 60;
        else if (target === 'year') return data * 0.0000019012852688417;
        else return false;
    }


    function second(data, target) {
        target = target.toLowerCase();
        //angle
        if (target === 'deg') return (Math.PI / (180 * 3600)) / (Math.PI / 180) * data;
        else if (target === 'grad') return ((Math.PI / (180 * 3600)) / (Math.PI / 200)) * data;
        else if (target === 'rad') return (Math.PI / (180 * 3600)) / data;
        //time
        else if (target === 'minute') return ((Math.PI / (180 * 3600)) / (Math.PI / (180 * 60))) * data;
        else if (target === 'century') return data * 0.00000000031688087814029;
        else if (target === 'minute') return data * 0.016666666666667;
        else if (target === 'day') return data * 0.000011574074074074;
        else if (target === 'week') return data * 0.0000016534391534392;
        else if (target === 'millisecond') return data * 1000;
        else if (target === 'hour') return data * 0.00027777777777778;
        else if (target === 'year') return data * 0.000000031688087814029;
        else return false;
    }


    convert.Angle = function(data, source, target) {
        if (isNumber(data)) {
            if (!source || !target || !isStringVariable(source) || !isStringVariable(target)) return false;
            source = source.toLowerCase();
            target = target.toLowerCase();
            if(source===target) return data;
            if(source === 'deg') return deg(data, target);
            else if(source === 'rad') return  rad(data, target);
            else if(source === 'grad') return  second(data, target);
            else if(source === 'minute') return  minute(data, target);
            else if(source === 'second') return  second(data, target);
            else return false;
        } else return false;
    };

    //time convert
    function century(data, target) {
        target = target.toLowerCase();
        if (target === 'minute') return data * 52596000;
        else if (target === 'day') return data * 36525;
        else if (target === 'week') return data * 5217.8571428571;
        else if (target === 'millisecond') return data * 3155760000000;
        else if (target === 'hour') return data * 876600;
        else if (target === 'second') return data * 3155760000;
        else if (target === 'year') return data * 100;
        else return false;
    }

    function day(data, target) {
        target = target.toLowerCase();
        if (target === 'century') return data * 0.000027378507871321;
        else if (target === 'minute') return data * 1440;
        else if (target === 'week') return data * 0.14285714285714;
        else if (target === 'millisecond') return data * 86400000;
        else if (target === 'hour') return data * 24;
        else if (target === 'second') return data * 86400;
        else if (target === 'year') return data * 0.0027378507871321;
        else return false;
    }

    function week(data, target) {
        target = target.toLowerCase();
        if (target === 'century') return data * 0.00019164955509925;
        else if (target === 'minute') return data * 10080;
        else if (target === 'day') return data * 7;
        else if (target === 'millisecond') return data * 604800000;
        else if (target === 'hour') return data * 168;
        else if (target === 'second') return data * 604800;
        else if (target === 'year') return data * 0.019164955509925;
        else return false;
    }

    function millisecond(data, target) {
        target = target.toLowerCase();
        if (target === 'century') return data * 0.00000000000031688087814029;
        else if (target === 'minute') return data * 0.000016666666666667;
        else if (target === 'day') return data * 0.000000011574074074074;
        else if (target === 'week') return data * 0.0000000016534391534392;
        else if (target === 'hour') return data * 0.00000027777777777778;
        else if (target === 'second') return data * 0.001;
        else if (target === 'year') return data * 0.000000000031688087814029;
        else return false;
    }

    function hour(data, target) {
        target = target.toLowerCase();
        if (target === 'century') return data * 0.000001140771161305;
        else if (target === 'minute') return data * 60;
        else if (target === 'day') return data * 0.041666666666667;
        else if (target === 'week') return data * 0.005952380952381;
        else if (target === 'millisecond') return data * 3600000;
        else if (target === 'second') return data * 3600;
        else if (target === 'year') return data * 0.0001140771161305;
        else return false;
    }

    function year(data, target) {
        target = target.toLowerCase();
        if (target === 'century') return data * 0.01;
        else if (target === 'minute') return data * 525960;
        else if (target === 'day') return data * 365.25;
        else if (target === 'week') return data * 52.178571428571;
        else if (target === 'millisecond') return data * 31557600000;
        else if (target === 'hour') return data * 8766;
        else if (target === 'second') return data * 31557600;
        else return false;
    }

    convert.Time = function(data, source, target) {
        if (isNumber(data)) {
            if (!source || !target || !isStringVariable(source) || !isStringVariable(target)) return false;
            source = source.toLowerCase();
            target = target.toLowerCase();
            if(source===target) return data;
            if (source === 'century') return century(data, target);
            else if (source === 'minute') return minute(data, target);
            else if (source === 'day') return day(data, target);
            else if (source === 'week') return week(data, target);
            else if (source === 'millisecond') return millisecond(data, target);
            else if (source === 'hour') return hour(data, target);
            else if (source === 'second') return second(data, target);
            else if (source === 'year') return year(data, target);
            else return false;
        } else return false;
    };

    //Energy convert
    function kilojoule(data, target) {
        target = target.toLowerCase();
        if (target === 'j') return data * 1000;
        else if (target === 'mj') return data * 0.001;
        else if (target === 'cal') return data * 238.8458966275;
        else if (target === 'kcal') return data * 0.2388458966275;
        else return false;
    }

    function joule(data, target) {
        target = target.toLowerCase();
        if (target === 'kj') return data * 0.001;
        else if (target === 'mj') return data * 0.000001;
        else if (target === 'cal') return data * 0.2388458966275;
        else if (target === 'kcal') return data * 0.0002388458966275;
        else return false;
    }

    function megajoule(data, target) {
        target = target.toLowerCase();
        if (target === 'kj') return data * 1000;
        else if (target === 'j') return data * 1000000;
        else if (target === 'cal') return data * 238845.8966275;
        else if (target === 'kcal') return data * 238.8458966275;
        else return false;
    }

    function calorie(data, target) {
        target = target.toLowerCase();
        if (target === 'kj') return data * 0.0041868;
        else if (target === 'j') return data * 4.1868;
        else if (target === 'mj') return data * 0.0000041868;
        else if (target === 'kcal') return data * 0.001;
        else return false;
    }

    function kilocalorie(data, target) {
        target = target.toLowerCase();
        if (target === 'kj') return data * 4.1868;
        else if (target === 'j') return data * 4186.8;
        else if (target === 'mj') return data * 0.0041868;
        else if (target === 'cal') return data * 1000;
        else return false;
    }

    convert.Energy = function(data, source, target) {
        if (isNumber(data)) {
            if (!source || !target || !isStringVariable(source) || !isStringVariable(target)) return false;
            source = source.toLowerCase();
            target = target.toLowerCase();
            if(source===target) return data;
            if (source === 'kj') return kilojoule(data, target);
            else if (source === 'j') return joule(data, target);
            else if (source === 'mj') return megajoule(data, target);
            else if (source === 'cal') return calorie(data, target);
            else if (source === 'kcal') return kilocalorie(data, target);
            else return false;
        } else return false;
    };

    //Astronomical convert
    function au96(data, target) {
        target = target.toLowerCase();
        if (target === 'km') return data * 149597870.69;
        else if (target === 'lightsecond') return data * 499.0047838;
        else if (target === 'lightminute') return data * 8.3167463967;
        else if (target === 'lighthour') return data * 0.13861243995;
        else if (target === 'lightday') return data * 0.0057755183311;
        else if (target === 'lightyear_julian') return data * 0.000015812507409;
        else if (target === 'lightyear_tropical') return data * 0.000015812845149;
        else if (target === 'lightyear_traditional') return data * 0.000015823337893;
        else if (target === 'parsec') return data * 0.000004848136957;
        else if (target === 'm') return data * 149597870690;
        else if (target === 'mile') return data * 92955807.267;
        else return false;
    }

    function lightSecond(data, target) {
        target = target.toLowerCase();
        if (target === 'au96') return data * 0.0020039888042;
        else if (target === 'km') return data * 299792.458;
        else if (target === 'lightminute') return data * 0.016666666667;
        else if (target === 'lighthour') return data * 0.00027777777778;
        else if (target === 'lightday') return data * 0.000011574074074;
        else if (target === 'lightyear_julian') return data * 3.1688087814e-8;
        else if (target === 'lightyear_tropical') return data * 3.1688764641e-8;
        else if (target === 'lightyear_traditional') return data * 3.1709791984e-8;
        else if (target === 'parsec') return data * 9.7156121849e-9;
        else if (target === 'm') return data * 299792458;
        else if (target === 'mile') return data * 186282.39705;
        else return false;
    }

    function lightMinute(data, target) {
        target = target.toLowerCase();
        if (target === 'au96') return data * 0.12023932825;
        else if (target === 'km') return data * 17987547.48;
        else if (target === 'lightsecond') return data * 60;
        else if (target === 'lighthour') return data * 0.016666666667;
        else if (target === 'lightday') return data * 0.00069444444445;
        else if (target === 'lightyear_julian') return data * 0.0000019012852688;
        else if (target === 'lightyear_tropical') return data * 0.0000019013258784;
        else if (target === 'lightyear_traditional') return data * 0.000001902587519;
        else if (target === 'parsec') return data * 5.8293673109e-7;
        else if (target === 'm') return data * 17987547480;
        else if (target === 'mile') return data * 11176943.823;
        else return false;
    }

    function lightHour(data, target) {
        target = target.toLowerCase();
        if (target === 'au96') return data * 7.2143596952;
        else if (target === 'km') return data * 1079252848.8;
        else if (target === 'lightsecond') return data * 3600;
        else if (target === 'lightminute') return data * 60;
        else if (target === 'lightday') return data * 0.041666666667;
        else if (target === 'lightyear_julian') return data * 0.00011407711613;
        else if (target === 'lightyear_tropical') return data * 0.00011407955271;
        else if (target === 'lightyear_traditional') return data * 0.00011415525114;
        else if (target === 'parsec') return data * 0.000034976203866;
        else if (target === 'm') return data * 1079252848800;
        else if (target === 'mile') return data * 670616629.38;
        else return false;
    }

    function lightDay(data, target) {
        target = target.toLowerCase();
        if (target === 'au96') return data * 173.14463268;
        else if (target === 'km') return data * 25902068371;
        else if (target === 'lightsecond') return data * 86399.999999;
        else if (target === 'lightminute') return data * 1440;
        else if (target === 'lighthour') return data * 24;
        else if (target === 'lightyear_julian') return data * 0.0027378507871;
        else if (target === 'lightyear_tropical') return data * 0.0027379092649;
        else if (target === 'lightyear_traditional') return data * 0.0027397260274;
        else if (target === 'parsec') return data * 0.00083942889277;
        else if (target === 'm') return data * 25902068371000;
        else if (target === 'mile') return data * 16094799105;
        else return false;
    }

    function lightYear_julian(data, target) {
        target = target.toLowerCase();
        if (target === 'au96') return data * 63241.077089;
        else if (target === 'km') return data * 9460730472600;
        else if (target === 'lightsecond') return data * 31557600;
        else if (target === 'lightminute') return data * 525960;
        else if (target === 'lighthour') return data * 8766;
        else if (target === 'lightday') return data * 365.25;
        else if (target === 'lightyear_tropical') return data * 1.000021359;
        else if (target === 'lightyear_traditional') return data * 1.0006849315;
        else if (target === 'parsec') return data * 0.30660140309;
        else if (target === 'm') return data * 9460730472600000;
        else if (target === 'mile') return data * 5878625373200;
        else return false;
    }

    function lightYear_tropical(data, target) {
        target = target.toLowerCase();
        if (target === 'au96') return data * 63239.726349;
        else if (target === 'km') return data * 9460528404900;
        else if (target === 'lightsecond') return data * 31556925.975;
        else if (target === 'lightminute') return data * 525948.76625;
        else if (target === 'lighthour') return data * 8765.8127708;
        else if (target === 'lightday') return data * 365.24219878;
        else if (target === 'lightyear_julian') return data * 0.99997864143;
        else if (target === 'lightyear_traditional') return data * 1.0006635583;
        else if (target === 'parsec') return data * 0.30659485452;
        else if (target === 'm') return data * 9460528404900000;
        else if (target === 'mile') return data * 5878499814100;
        else return false;
    }

    function lightYear_traditional(data, target) {
        target = target.toLowerCase();
        if (target === 'au96') return data * 63197.79093;
        else if (target === 'km') return data * 9454254955500;
        else if (target === 'lightsecond') return data * 31536000;
        else if (target === 'lightminute') return data * 525600;
        else if (target === 'lighthour') return data * 8760;
        else if (target === 'lightday') return data * 365;
        else if (target === 'lightyear_julian') return data * 0.9993155373;
        else if (target === 'lightyear_tropical') return data * 0.99933688171;
        else if (target === 'parsec') return data * 0.30639154586;
        else if (target === 'm') return data * 9454254955500000;
        else if (target === 'mile') return data * 5874601673400;
        else return false;
    }

    function parsec(data, target) {
        target = target.toLowerCase();
        if (target === 'au96') return data * 206264.8;
        else if (target === 'km') return data * 30856774879000;
        else if (target === 'lightsecond') return data * 102927121.93;
        else if (target === 'lightminute') return data * 1715452.0322;
        else if (target === 'lighthour') return data * 28590.867203;
        else if (target === 'lightday') return data * 1191.2861335;
        else if (target === 'lightyear_julian') return data * 3.2615636782;
        else if (target === 'lightyear_tropical') return data * 3.2616333421;
        else if (target === 'lightyear_traditional') return data * 3.263797626;
        else if (target === 'm') return data * 30856774879000000;
        else if (target === 'mile') return data * 19173510995000;
        else return false;
    }

    function mile(data, target) {
        target = target.toLowerCase();
        if (target === 'au96') return data * 1.0757800178e-8;
        else if (target === 'km') return data * 1.609344;
        else if (target === 'lightsecond') return data * 0.0000053681937522;
        else if (target === 'lightminute') return data * 8.946989587e-8;
        else if (target === 'lighthour') return data * 1.4911649312e-9;
        else if (target === 'lightday') return data * 6.2131872133e-11;
        else if (target === 'lightyear_julian') return data * 1.7010779502e-13;
        else if (target === 'lightyear_tropical') return data * 1.7011142836e-13;
        else if (target === 'lightyear_traditional') return data * 1.7022430721e-13;
        else if (target === 'm') return data * 1609.344;
        else if (target === 'parsec') return data * 5.215528863e-14;
        else return false;
    }

    convert.Astronomical = function(data, source, target) {
        if (isNumber(data)) {
            if (!source || !target || !isStringVariable(source) || !isStringVariable(target)) return false;
            source = source.toLowerCase();
            target = target.toLowerCase();
            if(source===target) return data;
            if (source === 'au96') return au96(data, target);
            else if (source === 'km') return km(data, target);
            else if (source === 'lightsecond') return lightSecond(data, target);
            else if (source === 'lightminute') return lightMinute(data, target);
            else if (source === 'lighthour') return lightHour(data, target);
            else if (source === 'lightday') return lightDay(data, target);
            else if (source === 'lightyear_julian') return lightYear_julian(data, target);
            else if (source === 'lightyear_tropical') return lightYear_tropical(data, target);
            else if (source === 'lightyear_traditional') return lightYear_traditional(data, target);
            else if (source === 'parsec') return parsec(data, target);
            else if (source === 'm') return m(data, target);
            else if (source === 'mile') return mile(data, target);
            else return false;
        } else return false;
    };

    //Speed convert
    function cm_s(data, target) {
        target = target.toLowerCase();
        if (target === 'ft/s') return (0.01 / 0.03048) * data;
        else if (target === 'inch/s') return (0.01 / (0.3048 / 12)) * data;
        else if (target === 'km/h') return (0.01 / (1000 / 3600)) * data;
        else if (target === 'km/s') return (0.01 / 1000) * data;
        else if (target === 'kn') return (0.01 / (1852 / 3600)) * data;
        else if (target === 'ma') return (0.01 / 340.29) * data;
        else if (target === 'm/s') return (0.01 / 1) * data;
        else if (target === 'mph') return (0.01 / (0.3048 * 5280) / 3600) * data;
        else if (target === 'mile/s') return (0.01 / (0.3048 * 5280)) * data;
        else if (target === 'mm/s') return (0.01 / 0.001) * data;
        else if (target === 's/light') return (0.01 / 299792458) * data;
        else if (target === 's/sound') return (0.01 / 340.29) * data;
        else return false;
    }

    function ft_s(data, target) {
        target = target.toLowerCase();
        if (target === 'cm/s') return (0.03048 / 0.01) * data;
        else if (target === 'inch/s') return (0.03048 / (0.3048 / 12)) * data;
        else if (target === 'km/h') return (0.03048 / (1000 / 3600)) * data;
        else if (target === 'km/s') return (0.03048 / 1000) * data;
        else if (target === 'kn') return (0.03048 / (1852 / 3600)) * data;
        else if (target === 'ma') return (0.03048 / 340.29) * data;
        else if (target === 'm/s') return (0.03048 / 1) * data;
        else if (target === 'mph') return (0.03048 / (0.3048 * 5280) / 3600) * data;
        else if (target === 'mile/s') return (0.03048 / (0.3048 * 5280)) * data;
        else if (target === 'mm/s') return (0.03048 / 0.001) * data;
        else if (target === 's/light') return (0.03048 / 299792458) * data;
        else if (target === 's/sound') return (0.03048 / 340.29) * data;
        else return false;
    }

    function inch_s(data, target) {
        target = target.toLowerCase();
        if (target === 'cm/s') return ((0.3048 / 12) / 0.01) * data;
        else if (target === 'ft/s') return ((0.3048 / 12) / 0.03048) * data;
        else if (target === 'km/h') return ((0.3048 / 12) / (1000 / 3600)) * data;
        else if (target === 'km/s') return ((0.3048 / 12) / 1000) * data;
        else if (target === 'kn') return ((0.3048 / 12) / (1852 / 3600)) * data;
        else if (target === 'ma') return ((0.3048 / 12) / 340.29) * data;
        else if (target === 'm/s') return ((0.3048 / 12) / 1) * data;
        else if (target === 'mph') return ((0.3048 / 12) / (0.3048 * 5280) / 3600) * data;
        else if (target === 'mile/s') return ((0.3048 / 12) / (0.3048 * 5280)) * data;
        else if (target === 'mm/s') return ((0.3048 / 12) / 0.001) * data;
        else if (target === 's/light') return ((0.3048 / 12) / 299792458) * data;
        else if (target === 's/sound') return ((0.3048 / 12) / 340.29) * data;
        else return false;
    }

    function km_h(data, target) {
        target = target.toLowerCase();
        if (target === 'cm/s') return ((1000 / 3600) / 0.01) * data;
        else if (target === 'ft/s') return ((1000 / 3600) / 0.03048) * data;
        else if (target === 'inch/s') return ((1000 / 3600) / (0.3048 / 12)) * data;
        else if (target === 'km/s') return ((1000 / 3600) / 1000) * data;
        else if (target === 'kn') return ((1000 / 3600) / (1852 / 3600)) * data;
        else if (target === 'ma') return ((1000 / 3600) / 340.29) * data;
        else if (target === 'm/s') return ((1000 / 3600) / 1) * data;
        else if (target === 'mph') return ((1000 / 3600) / (0.3048 * 5280) / 3600) * data;
        else if (target === 'mile/s') return ((1000 / 3600) / (0.3048 * 5280)) * data;
        else if (target === 'mm/s') return ((1000 / 3600) / 0.001) * data;
        else if (target === 's/light') return ((1000 / 3600) / 299792458) * data;
        else if (target === 's/sound') return ((1000 / 3600) / 340.29) * data;
        else return false;
    }

    function km_s(data, target) {
        target = target.toLowerCase();
        if (target === 'cm/s') return (1000 / 0.01) * data;
        else if (target === 'ft/s') return (1000 / 0.03048) * data;
        else if (target === 'inch/s') return (1000 / (0.3048 / 12)) * data;
        else if (target === 'km/h') return (1000 / (1000 / 3600)) * data;
        else if (target === 'kn') return (1000 / (1852 / 3600)) * data;
        else if (target === 'ma') return (1000 / 340.29) * data;
        else if (target === 'm/s') return (1000 / 1) * data;
        else if (target === 'mph') return (1000 / (0.3048 * 5280) / 3600) * data;
        else if (target === 'mile/s') return (1000 / (0.3048 * 5280)) * data;
        else if (target === 'mm/s') return (1000 / 0.001) * data;
        else if (target === 's/light') return (1000 / 299792458) * data;
        else if (target === 's/sound') return (1000 / 340.29) * data;
        else return false;
    }

    function ma(data, target) {
        target = target.toLowerCase();
        if (target === 'cm/s') return ((1852 / 3600) / 0.01) * data;
        else if (target === 'ft/s') return ((1852 / 3600) / 0.03048) * data;
        else if (target === 'inch/s') return ((1852 / 3600) / (0.3048 / 12)) * data;
        else if (target === 'km/h') return ((1852 / 3600) / (1000 / 3600)) * data;
        else if (target === 'km/s') return ((1852 / 3600) / 1000) * data;
        else if (target === 'ma') return ((1852 / 3600) / 340.29) * data;
        else if (target === 'm/s') return ((1852 / 3600) / 1) * data;
        else if (target === 'mph') return ((1852 / 3600) / (0.3048 * 5280) / 3600) * data;
        else if (target === 'mile/s') return ((1852 / 3600) / (0.3048 * 5280)) * data;
        else if (target === 'mm/s') return ((1852 / 3600) / 0.001) * data;
        else if (target === 's/light') return ((1852 / 3600) / 299792458) * data;
        else if (target === 's/sound') return ((1852 / 3600) / 340.29) * data;
        else return false;
    }

    function kn(data, target) {
        target = target.toLowerCase();
        if (target === 'cm/s') return ((1852 / 3600) / 0.01) * data;
        else if (target === 'ft/s') return ((1852 / 3600) / 0.03048) * data;
        else if (target === 'inch/s') return ((1852 / 3600) / (0.3048 / 12)) * data;
        else if (target === 'km/h') return ((1852 / 3600) / (1000 / 3600)) * data;
        else if (target === 'km/s') return ((1852 / 3600) / 1000) * data;
        else if (target === 'ma') return ((1852 / 3600) / 340.29) * data;
        else if (target === 'm/s') return ((1852 / 3600) / 1) * data;
        else if (target === 'mph') return ((1852 / 3600) / (0.3048 * 5280) / 3600) * data;
        else if (target === 'mile/s') return ((1852 / 3600) / (0.3048 * 5280)) * data;
        else if (target === 'mm/s') return ((1852 / 3600) / 0.001) * data;
        else if (target === 's/light') return ((1852 / 3600) / 299792458) * data;
        else if (target === 's/sound') return ((1852 / 3600) / 340.29) * data;
        else return false;
    }


    function ma(data, target) {
        target = target.toLowerCase();
        if (target === 'cm/s') return (340.29 / 0.01) * data;
        else if (target === 'ft/s') return ((1852 / 3600) / 0.03048) * data;
        else if (target === 'inch/s') return (340.29 / (0.3048 / 12)) * data;
        else if (target === 'km/h') return (340.29 / (1000 / 3600)) * data;
        else if (target === 'km/s') return (340.29 / 1000) * data;
        else if (target === 'kn') return (340.29 / (1852 / 3600)) * data;
        else if (target === 'm/s') return (340.29 / 1) * data;
        else if (target === 'mph') return (340.29 / (0.3048 * 5280) / 3600) * data;
        else if (target === 'mile/s') return (340.29 / (0.3048 * 5280)) * data;
        else if (target === 'mm/s') return (340.29 / 0.001) * data;
        else if (target === 's/light') return (340.29 / 299792458) * data;
        else if (target === 's/sound') return (340.29 / 340.29) * data;
        else return false;
    }

    function m_s(data, target) {
        target = target.toLowerCase();
        if (target === 'cm/s') return (1 / 0.01) * data;
        else if (target === 'ft/s') return (1 / 0.03048) * data;
        else if (target === 'inch/s') return (340.29 / (0.3048 / 12)) * data;
        else if (target === 'km/h') return (1 / (1000 / 3600)) * data;
        else if (target === 'km/s') return (1 / 1000) * data;
        else if (target === 'kn') return (1 / (1852 / 3600)) * data;
        else if (target === 'ma') return (1 / 340.29) * data;
        else if (target === 'mph') return (1 / (0.3048 * 5280) / 3600) * data;
        else if (target === 'mile/s') return (1 / 0.3048 * 5280) * data;
        else if (target === 'mm/s') return (1 / 0.001) * data;
        else if (target === 's/light') return (1 / 299792458) * data;
        else if (target === 's/sound') return (1 / 340.29) * data;
        else return false;
    }

    function mph(data, target) {
        target = target.toLowerCase();
        if (target === 'cm/s') return ((0.3048 * 5280) / 3600 / 0.01) * data;
        else if (target === 'ft/s') return ((0.3048 * 5280) / 3600 / 0.03048) * data;
        else if (target === 'inch/s') return ((0.3048 * 5280) / 3600 / 0.3048 / 12) * data;
        else if (target === 'km/h') return ((0.3048 * 5280) / 3600 / 1000 / 3600) * data;
        else if (target === 'km/s') return ((0.3048 * 5280) / 3600 / 1000) * data;
        else if (target === 'kn') return ((0.3048 * 5280) / 3600 / 1852 / 3600) * data;
        else if (target === 'ma') return ((0.3048 * 5280) / 3600 / 340.29) * data;
        else if (target === 'm/s') return ((0.3048 * 5280) / 3600 / 1) * data;
        else if (target === 'mile/s') return ((0.3048 * 5280) / 3600 / 0.3048 * 5280) * data;
        else if (target === 'mm/s') return ((0.3048 * 5280) / 3600 / 0.001) * data;
        else if (target === 's/light') return ((0.3048 * 5280) / 3600 / 299792458) * data;
        else if (target === 's/sound') return ((0.3048 * 5280) / 3600 / 340.29) * data;
        else return false;
    }

    function mile_s(data, target) {
        target = target.toLowerCase();
        if (target === 'cm/s') return ((0.3048 * 5280) / 0.01) * data;
        else if (target === 'ft/s') return ((0.3048 * 5280) / 0.03048) * data;
        else if (target === 'inch/s') return ((0.3048 * 5280) / (0.3048 / 12)) * data;
        else if (target === 'km/h') return ((0.3048 * 5280) / 1000 / 3600) * data;
        else if (target === 'km/s') return ((0.3048 * 5280) / 1000) * data;
        else if (target === 'kn') return ((0.3048 * 5280) / 1852 / 3600) * data;
        else if (target === 'ma') return ((0.3048 * 5280) / 340.29) * data;
        else if (target === 'm/s') return ((0.3048 * 5280) / 1) * data;
        else if (target === 'mph') return ((0.3048 * 5280) / 0.3048 * 5280) * data;
        else if (target === 'mm/s') return ((0.3048 * 5280) / 0.001) * data;
        else if (target === 's/light') return ((0.3048 * 5280) / 299792458) * data;
        else if (target === 's/sound') return ((0.3048 * 5280) / 340.29) * data;
        else return false;
    }

    function mm_s(data, target) {
        target = target.toLowerCase();
        if (target === 'cm/s') return (0.001 / 0.01) * data;
        else if (target === 'ft/s') return (0.001 / 0.03048) * data;
        else if (target === 'inch/s') return (0.001 / 0.3048 / 12) * data;
        else if (target === 'km/h') return (0.001 / 1000 / 3600) * data;
        else if (target === 'km/s') return (0.001 / 1000) * data;
        else if (target === 'kn') return (0.001 / 1852 / 3600) * data;
        else if (target === 'ma') return (0.001 / 340.29) * data;
        else if (target === 'm/s') return (0.001 / 1) * data;
        else if (target === 'mph') return (0.001 / (0.3048 * 5280) / 3600) * data;
        else if (target === 'mile/s') return (0.001 / 0.3048 * 5280) * data;
        else if (target === 's/light') return (0.001 / 299792458) * data;
        else if (target === 's/sound') return (0.001 / 340.29) * data;
        else return false;
    }

    function s_light(data, target) {
        target = target.toLowerCase();
        if (target === 'cm/s') return (299792458 / 0.01) * data;
        else if (target === 'ft/s') return (299792458 / 0.03048) * data;
        else if (target === 'inch/s') return (299792458 / 0.3048 / 12) * data;
        else if (target === 'km/h') return (299792458 / 1000 / 3600) * data;
        else if (target === 'km/s') return (299792458 / 1000) * data;
        else if (target === 'kn') return (299792458 / 1852 / 3600) * data;
        else if (target === 'ma') return (299792458 / 340.29) * data;
        else if (target === 'm/s') return (299792458 / 1) * data;
        else if (target === 'mph') return (299792458 / (0.3048 * 5280) / 3600) * data;
        else if (target === 'mile/s') return (299792458 / 0.3048 * 5280) * data;
        else if (target === 'mm/s') return (299792458 / 0.001) * data;
        else if (target === 's/sound') return (299792458 / 340.29) * data;
        else return false;
    }

    function s_sound(data, target) {
        target = target.toLowerCase();
        if (target === 'cm/s') return (340.29 / 0.01) * data;
        else if (target === 'ft/s') return (340.29 / 0.03048) * data;
        else if (target === 'inch/s') return (340.29 / 0.3048 / 12) * data;
        else if (target === 'km/h') return (340.29 / 1000 / 3600) * data;
        else if (target === 'km/s') return (340.29 / 1000) * data;
        else if (target === 'kn') return (340.29 / 1852 / 3600) * data;
        else if (target === 'ma') return (340.29 / 340.29) * data;
        else if (target === 'm/s') return (340.29 / 1) * data;
        else if (target === 'mph') return (340.29 / (0.3048 * 5280) / 3600) * data;
        else if (target === 'mile/s') return (340.29 / 0.3048 * 5280) * data;
        else if (target === 'mm/s') return (340.29 / 0.001) * data;
        else if (target === 's/light') return (340.29 / 299792458) * data;
        else return false;
    }

     convert.Speed = function(data, source, target){
        if(isNumber(data)){
            if (!source || !target || !isStringVariable(source) || !isStringVariable(target)) return false;
            source = source.toLowerCase();
            target = target.toLowerCase();
            if(source===target) return data;
            if (source === 'cm/s') return cm_s(data, target);
            else if (source === 'ft/s') return ft_s(data, target);
            else if (source === 'inch/s') return inch_s(data, target);
            else if (source === 'km/h') return km_h(data, target);
            else if (source === 'km/s') return km_s(data, target);
            else if (source === 'ma') return ma(data, target);
            else if (source === 'kn') return kn(data, target);
            else if (source === 'm/s') return m_s(data, target);
            else if (source === 'mph') return mph(data, target);
            else if (source === 'mile/s') return mile_s(data, target);
            else if (source === 'mm/s') return mm_s(data, target);
            else if (source === 's/light') return s_light(data, target);
            else if (source === 's/sound') return s_sound(data, target);
            else return false;
        } else return false;
    };

    //Periodic convert
    convert.Periodic = function(data) {
        var elementsymbols = new Array("H", "He", "Li", "Be", "B", "C", "N", "O", "F",
            "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V",
            "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb",
            "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb",
            "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb",
            "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au",
            "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np",
            "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds",
            "Uuu", "Uub", "Uut", "Uuq", "Uup", "Uuh", "Uus", "Uuo", "Uue", "Ubn");
        if (isNumber(data)) {
            if (data > 0 && data <= 120) return elementsymbols[data - 1];
            else return false;
        } else return false;
    };

    //Ampere convert
    function ampere(data, target) {
        target = target.toLowerCase();
        if (target === 'nanoa') return 0.0000000001 * data;
        else if (target === 'mikroa') return 0.0000001 * data;
        else if (target === 'ma') return 0.0001 * data;
        else if (target === 'megaa') return 1.0E-6 * data;
        else if (target === 'gigaa') return 1.0E-9 * data;
        else if (target === 'kiloa') return 0.001 * data;
        else return false;
    }

    function mA(data, target) {
        target = target.toLowerCase();
        if (target === 'ampere') return 0.001 * data;
        else if (target === 'nanoa') return 1000000 * data;
        else if (target === 'mikroa') return 1000 * data;
        else if (target === 'megaa') return 1.0E-9 * data;
        else if (target === 'gigaa') return 1.0E-12 * data;
        else if (target === 'kiloa') return 1.0E-6 * data;
        else return false;
    }

    function nanoA(data, target) {
        target = target.toLowerCase();
        if (target === 'ampere') return 1.0E-9 * data;
        else if (target === 'ma') return 1.0E-6 * data;
        else if (target === 'mikroa') return 0.001 * data;
        else if (target === 'megaa') return 1.0E-15 * data;
        else if (target === 'gigaa') return 1.0E-18 * data;
        else if (target === 'kiloa') return 1.0E-12 * data;
        else return false;
    }

    function mikroA(data, target) {
        target = target.toLowerCase();
        if (target == 'ampere') return 1.0E-6 * data;
        else if (target === 'ma') return 0.001 * data;
        else if (target === 'nanoa') return 1000 * data;
        else if (target === 'megaa') return 1.0E-12 * data;
        else if (target === 'gigaa') return 1.0E-15 * data;
        else if (target === 'kiloa') return 1.0E-9 * data;
        else return false;
    }


    function gigaA(data, target) {
        target = target.toLowerCase();
        if (target === 'ampere') return 1000000000 * data;
        else if (target === 'ma') return 1.0E+12 * data;
        else if (target === 'nanoa') return 1.0E+18 * data;
        else if (target === 'mikroa') return 1.0E+15 * data;
        else if (target === 'megaa') return 1000 * data;
        else if (target === 'kiloa') return 1000000 * data;
        else return false;

    }

    function megaA(data, target) {
        target = target.toLowerCase();
        if (target === 'ampere') return 1000000 * data;
        else if (target === 'ma') return 1000000 * data;
        else if (target === 'nanoa') return 1.0E+15 * data;
        else if (target === 'mikroa') return 1.0E+12 * data;
        else if (target === 'gigaa') return 0.001 * data;
        else if (target === 'kiloa') return 1000 * data;
        else return false;
    }

    convert.Ampere = function(data, source, target) {
        if (isNumber(data)) {
            if (!source || !target || !isStringVariable(source) || !isStringVariable(target)) return false;
            source = source.toLowerCase();
            target = target.toLowerCase();
            if(source===target) return data;
            if (source === 'ampere') return ampere(data, target);
            else if (source === 'nanoa') return nanoA(data, target);
            else if (source === 'mikroa') return mikroA(data, target);
            else if (source === 'ma') return mA(data, target);
            else if (source === 'megaa') return megaA(data, target);
            else if (source === 'gigaa') return gigaA(data, target);
            else if (source === 'kiloa') return kiloA(data, target);
            else return false;
        } else return false;
    };

    //Convert Multiple Lines to Javascript Array
	convert.ObjectToArray = function(data, divider){
		  
		  var output = [];
		  var outputText = [];
		  if (!data) return output;
		  var lines = data.split(divider);
		  for (var i = 0; i < lines.length; i++) {
		    // only push this line if it contains a non whitespace character.
		    if (/\S/.test(lines[i])) {
		      outputText.push('"' + lines[i].trim() + '"');
		      output.push(lines[i].trim());
		    }
		  }
		  //var jsarray = '[' + outputText + ']';
		  return output;
	}

convert.JsontoXML = function objectToXml(obj) {
        var xml = '';
        for (var prop in obj) {
            if (!obj.hasOwnProperty(prop)) {
                continue;
            }
            if (obj[prop] == undefined)
                continue;
            xml += "<" + prop + ">";
            if (typeof obj[prop] == "object")
                xml += objectToXml(new Object(obj[prop]));
            else
                xml += obj[prop];
            xml += "</" + prop + ">";
        }
        return xml;
    }

return convert;
}));
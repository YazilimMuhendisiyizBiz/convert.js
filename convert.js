/*!
 * convert.js 0.0.1
 * Author: Ertuğrul Üngör, Yakup Ad
 * Supporter: Yakup Ad
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
    convert.VERSION = '0.0.1';

    function isNumber(data){
        return toString.call(data) === '[object Number]';
    }

    //Metric Convert
    function cm(data, target){
        target = target.toLowerCase();
        if(target === 'km') return data * 0.00001;
        else if (target === 'hm') return data * 0.0001;
        else if (target === 'dam') return data * 0.001;
        else if (target === 'm') return data * 0.01;
        else if (target === 'dm') return data * 0.1;
        else if (target === 'mm') return data * 10;
        else if (target === 'inch') return data * 0.39370078740157;
        else if (target === 'feet') return data * 0.032808398950131;
        else if (target === 'yard') return data * 0.010936132983377;
    }

    function km(data, target){
        target = target.toLowerCase();
        if(target === 'cm') return data * 100000;
        else if (target === 'hm') return data * 10;
        else if (target === 'dam') return data * 100;
        else if (target === 'm') return data * 1000;
        else if (target === 'dm') return data * 10000;
        else if (target === 'mm') return data * 1000000;
        else if (target === 'inch') return data * 39370.078740157;
        else if (target === 'feet') return data * 3280.8398950131;
        else if (target === 'yard') return data * 1093.6132983377;
    }

    function hm(data, target){
        target = target.toLowerCase();
        if(target === 'cm') return data * 10000;
        else if (target === 'km') return data * 0.1;
        else if (target === 'dam') return data * 10;
        else if (target === 'm') return data * 100;
        else if (target === 'dm') return data * 1000;
        else if (target === 'mm') return data * 100000;
        else if (target === 'inch') return data * 3937.0078740157;
        else if (target === 'feet') return data * 328.08398950131;
        else if (target === 'yard') return data * 109.36132983377;
    }

    function dam(data, target){
        target = target.toLowerCase();
        if(target === 'cm') return data * 1000;
        else if (target === 'km') return data * 0.01;
        else if (target === 'hm') return data * 0.1;
        else if (target === 'm') return data * 10;
        else if (target === 'dm') return data * 100;
        else if (target === 'mm') return data * 10000;
        else if (target === 'inch') return data * 393.70078740157;
        else if (target === 'feet') return data * 32.808398950131;
        else if (target === 'yard') return data * 10.936132983377;
    }

    function m(data, target){
        target = target.toLowerCase();
        if(target === 'cm') return data * 100;
        else if (target === 'km') return data * 0.001;
        else if (target === 'hm') return data * 0.01;
        else if (target === 'dam') return data * 0.1;
        else if (target === 'dm') return data * 10;
        else if (target === 'mm') return data * 1000;
        else if (target === 'inch') return data * 39.370078740157;
        else if (target === 'feet') return data * 3.2808398950131;
        else if (target === 'yard') return data * 1.0936132983377;
    }

    function mm(data, target){
        target = target.toLowerCase();
        if(target === 'cm') return data * 0.1;
        else if (target === 'km') return data * 0.000001;
        else if (target === 'hm') return data * 0.00001;
        else if (target === 'dam') return data * 0.0001;
        else if (target === 'dm') return data * 0.01;
        else if (target === 'm') return data * 0.001;
        else if (target === 'inch') return data * 0.039370078740157;
        else if (target === 'feet') return data * 0.0032808398950131;
        else if (target === 'yard') return data * 0.0010936132983377;
    }

    function inch(data, target){
        target = target.toLowerCase();
        if(target === 'cm') return data * 2.54;
        else if (target === 'km') return data * 0.0000254;
        else if (target === 'hm') return data * 0.000254;
        else if (target === 'dam') return data * 0.00254;
        else if (target === 'dm') return data * 0.254;
        else if (target === 'm') return data * 0.0254;
        else if (target === 'mm') return data * 25.4;
        else if (target === 'feet') return data * 0.083333333333333;
        else if (target === 'yard') return data * 0.027777777777778;
    }

    function feet(data, target){
        target = target.toLowerCase();
        if(target === 'cm') return data * 30.48;
        else if (target === 'km') return data * 0.0003048;
        else if (target === 'hm') return data * 0.003048;
        else if (target === 'dam') return data * 0.03048;
        else if (target === 'dm') return data * 3.048;
        else if (target === 'm') return data * 0.3048;
        else if (target === 'mm') return data * 304.8;
        else if (target === 'inch') return data * 12;
        else if (target === 'yard') return data * 0.33333333333333;
    }

    function yard(data, target){
        target = target.toLowerCase();
        if(target === 'cm') return data * 91.44;
        else if (target === 'km') return data * 0.0009144;
        else if (target === 'hm') return data * 0.009144;
        else if (target === 'dam') return data * 0.09144;
        else if (target === 'dm') return data * 9.144;
        else if (target === 'm') return data * 0.9144;
        else if (target === 'mm') return data * 914.4;
        else if (target === 'inch') return data * 36;
        else if (target === 'feet') return data * 3;
    }

    convert.Metric = function(data, source, target){
        if(isNumber(data)){
            source = source.toLowerCase();
            if (source === 'cm') return cm(data, target);
            else if (source === 'km') return km(data, target);
            else if (source === 'hm') return hm(data, target);
            else if (source === 'm') return m(data, target);
            else if (source === 'mm') return m(data, target);  
            else if (source === 'inch') return inch(data, target);  
            else if (source === 'feet') return feet(data, target);  
            else if (source === 'yard') return yard(data, target);             
        }else return false;
    };

    //Data Unit Storage Convert
    function byte(data, target){
        target = target.toLowerCase();
        if(target === 'kb') return data * 0.0009765625;
        else if (target === 'mb') return data * 0.00000095367431640625;
        else if (target === 'gb') return data * 0.00000000093132257461548;
        else if (target === 'tb') return data * 0.00000000000090949470177293;
        else if (target === 'pb') return data * 0.00000000000000088817841970013;
    }

    function kb(data, target){
        target = target.toLowerCase();
        if(target === 'byte') return data * 1024;
        else if (target === 'mb') return data * 0.0009765625;
        else if (target === 'gb') return data * 0.00000095367431640625;
        else if (target === 'tb') return data * 0.00000000093132257461548;
        else if (target === 'pb') return data * 0.00000000000090949470177293;
    }

    function mb(data, target){
        target = target.toLowerCase();
        if(target === 'byte') return data * 1048576;
        else if (target === 'kb') return data * 1024;
        else if (target === 'gb') return data * 0.0009765625;
        else if (target === 'tb') return data * 0.00000095367431640625;
        else if (target === 'pb') return data * 0.00000000093132257461548;
    }

    function gb(data, target){
        target = target.toLowerCase();
        if(target === 'byte') return data * 1073741824;
        else if (target === 'kb') return data * 1048576;
        else if (target === 'mb') return data * 1024;
        else if (target === 'tb') return data * 0.0009765625;
        else if (target === 'pb') return data * 0.00000095367431640625;
    }

    function tb(data, target){
        target = target.toLowerCase();
        if(target === 'byte') return data * 1099511627776;
        else if (target === 'kb') return data * 1073741824;
        else if (target === 'mb') return data * 1048576;
        else if (target === 'gb') return data * 1024;
        else if (target === 'pb') return data * 0.0009765625;
    }

    function pb(data, target){
        target = target.toLowerCase();
        if(target === 'byte') return data * 1125899906842600;
        else if (target === 'kb') return data * 1099511627776;
        else if (target === 'mb') return data * 1073741824;
        else if (target === 'gb') return data * 1048576;
        else if (target === 'tb') return data * 1024;
    }

    convert.DataUnits = function(data, source, target){
        if(isNumber(data)){
            source = source.toLowerCase();
            if (source === 'byte') return byte(data, target);
            else if (source === 'kb') return kb(data, target);
            else if (source === 'mb') return mb(data, target);
            else if (source === 'gb') return gb(data, target);
            else if (source === 'pb') return pb(data, target);
        }else return false;
    };

    //Temperature convert
    function c(data, target) {
    	target = target.toLowerCase();
    	if(target === 'k') return data + 273.15;
        else if (target === 'f') return 1.8 * data + 32;
        else if (target === 'n') return data * 0.33;
    }

    function k(data, target) {
    	target = target.toLowerCase();
    	if(target === 'c') return data - 273.15;
        else if (target === 'f') return 9 * data / 5 - 459.67 ;
        else if (target === 'n') return 0.33 * (data - 273.15);
    }

    function f(data, target) {
    	target = target.toLowerCase();
    	if(target === 'c') return 5 * (data - 32) / 9;
        else if (target === 'k') return 5 * (data + 459.67) / 9;
        else if (target === 'n') return 0.18333 * (data - 32);
    }

    function n(data, target) {
    	target = target.toLowerCase();
    	if(target === 'c') return data / 0.33;
        else if (target === 'k') return data / 0.33 + 273.15;
        else if (target === 'f') return 0.18333 * (data - 32);
    }

    convert.Temperature = function(data, source, target) { 
    	if(isNumber(data)){
    		source = source.toLowerCase();
    		if (source === 'c') return c(data, target);
            else if (source === 'k') return k(data, target);
            else if (source === 'f') return f(data, target);
            else if (source === 'n') return n(data, target);
    	}else return false;
    };

    function deg(data, target) {
        target = target.toLowerCase();
        if(target === 'rad') return (Math.PI/180) / data;
        else if(target === 'grad') return ((Math.PI/180) / (Math.PI/200)) * data;
        else if(target === 'minute') return data * 60;
        else if(target === 'second') return data * 3600;
    }

    function rad(data, target) {
        target = target.toLowerCase();
        if(target === 'deg') return (data * 180) / Math.PI;
        else if(target === 'grad') return data / (Math.PI / 200);
        else if(target === 'minute') return data / (Math.PI / (180 * 60));
        else if(target === 'second') return data / (Math.PI / (180 * 3600));
    }

    function grad(data, target) {
        target = target.toLowerCase();
        if(target === 'deg') return ((Math.PI/200) / (Math.PI/180)) * data;
        else if(target === 'rad') return (Math.PI/200) / data;
        else if(target === 'minute') return ((Math.PI/200) / (Math.PI/(180*60))) * data;
        else if(target === 'second') return ((Math.PI/200) / (Math.PI/(180*3600))) * data;
    }


    function minute(data, target) {
        target = target.toLowerCase();
        //angle
        if(target === 'deg') return ((Math.PI / (180 * 60)) / (Math.PI / 180)) * data;
        else if(target === 'grad') return ((Math.PI / (180 * 60)) / (Math.PI / 200)) * data;
        else if(target === 'rad') return (Math.PI / (180 * 60)) / data;
        else if(target === 'second') return ((Math.PI / (180 * 60)) / (Math.PI/(180 * 3600))) * data;
        //time
        else if(target === 'century') return data * 0.000000019012852688417;
        else if(target === 'day') return data * 0.00069444444444444;     
        else if(target === 'week') return data * 0.000099206349206349;     
        else if(target === 'millisecond') return data * 60000;
        else if(target === 'hour') return data * 0.016666666666667;     
        else if(target === 'second') return data * 60;   
        else if(target === 'year') return data * 0.0000019012852688417;       
    }


    function second(data, target) {
        target = target.toLowerCase();
        //angle
        if(target === 'deg') return (Math.PI / (180 * 3600)) / (Math.PI / 180) * data;
        else if(target === 'grad') return ((Math.PI / (180 * 3600)) / (Math.PI / 200)) * data;
        else if(target === 'rad') return (Math.PI / (180 * 3600)) / data;
        //time
        else if(target === 'minute') return ((Math.PI / (180 * 3600)) / (Math.PI / (180 * 60))) * data;
        else if(target === 'century') return data * 0.00000000031688087814029;
        else if(target === 'minute') return data * 0.016666666666667;     
        else if(target === 'day') return data * 0.000011574074074074;     
        else if(target === 'week') return data * 0.0000016534391534392;
        else if(target === 'millisecond') return data * 1000;       
        else if(target === 'hour') return data * 0.00027777777777778;  
        else if(target === 'year') return data * 0.000000031688087814029;   
    }


    convert.Angle = function(data, source, target) {
        if(isNumber(data)){
            source = source.toLowerCase();
            if(source === 'deg') return deg(data, target);
            else if(source === 'rad') return  rad(data, target);
            else if(source === 'grad') return  second(data, target);
            else if(source === 'minute') return  minute(data, target);
            else if(source === 'second') return  second(data, target);
        }else return false;
    };

    //time convert
    function century(data, target){
        target = target.toLowerCase();
        if(target === 'minute') return data * 52596000;
        else if(target === 'day') return data * 36525;     
        else if(target === 'week') return data * 5217.8571428571;     
        else if(target === 'millisecond') return data * 3155760000000;
        else if(target === 'hour') return data * 876600; 
        else if(target === 'second') return data * 3155760000;       
        else if(target === 'year') return data * 100;       
    }

    function day(data, target){
        target = target.toLowerCase();
        if(target === 'century') return data * 0.000027378507871321;
        else if(target === 'minute') return data * 1440;     
        else if(target === 'week') return data * 0.14285714285714;     
        else if(target === 'millisecond') return data * 86400000;
        else if(target === 'hour') return data * 24;       
        else if(target === 'second') return data * 86400;  
        else if(target === 'year') return data * 0.0027378507871321;       
    }

    function week(data, target){
        target = target.toLowerCase();
        if(target === 'century') return data * 0.00019164955509925;
        else if(target === 'minute') return data * 10080;     
        else if(target === 'day') return data * 7;     
        else if(target === 'millisecond') return data * 604800000;
        else if(target === 'hour') return data * 168;       
        else if(target === 'second') return data * 604800;  
        else if(target === 'year') return data * 0.019164955509925;       
    }

    function millisecond(data, target){
        target = target.toLowerCase();
        if(target === 'century') return data * 0.00000000000031688087814029;
        else if(target === 'minute') return data * 0.000016666666666667;     
        else if(target === 'day') return data * 0.000000011574074074074;     
        else if(target === 'week') return data * 0.0000000016534391534392;
        else if(target === 'hour') return data * 0.00000027777777777778;       
        else if(target === 'second') return data * 0.001;  
        else if(target === 'year') return data * 0.000000000031688087814029;       
    }

    function hour(data, target){
        target = target.toLowerCase();
        if(target === 'century') return data * 0.000001140771161305;
        else if(target === 'minute') return data * 60;     
        else if(target === 'day') return data * 0.041666666666667;     
        else if(target === 'week') return data * 0.005952380952381;
        else if(target === 'millisecond') return data * 3600000;       
        else if(target === 'second') return data * 3600;  
        else if(target === 'year') return data * 0.0001140771161305;       
    }

     function year(data, target){
        target = target.toLowerCase();
        if(target === 'century') return data * 0.01;
        else if(target === 'minute') return data * 525960;     
        else if(target === 'day') return data * 365.25;     
        else if(target === 'week') return data * 52.178571428571;
        else if(target === 'millisecond') return data * 31557600000;       
        else if(target === 'hour') return data * 8766;  
        else if(target === 'second') return data * 31557600;       
    }

    convert.Time = function(data, source, target) { 
        if(isNumber(data)){
            source = source.toLowerCase();
            if (source === 'century') return century(data, target);
            else if (source === 'minute') return minute(data, target);
            else if (source === 'day') return day(data, target);
            else if (source === 'week') return week(data, target);
            else if (source === 'millisecond') return millisecond(data, target);
            else if (source === 'hour') return hour(data, target);
            else if (source === 'second') return second(data, target);
            else if (source === 'year') return year(data, target);
        }else return false;
    };

    //Energy convert
    function kilojoule(data, target){
        target = target.toLowerCase();
        if(target === 'j') return data * 1000;
        else if(target === 'mj') return data * 0.001;
        else if(target === 'cal') return data * 238.8458966275;
        else if(target === 'kcal') return data * 0.2388458966275;
    }

    function joule(data, target){
        target = target.toLowerCase();
        if(target === 'kj') return data * 0.001;
        else if(target === 'mj') return data * 0.000001;
        else if(target === 'cal') return data * 0.2388458966275;
        else if(target === 'kcal') return data * 0.0002388458966275;
    }

    function megajoule(data, target){
        target = target.toLowerCase();
        if(target === 'kj') return data * 1000;
        else if(target === 'j') return data * 1000000;
        else if(target === 'cal') return data * 238845.8966275;
        else if(target === 'kcal') return data * 238.8458966275;
    }

    function calorie(data, target){
        target = target.toLowerCase();
        if(target === 'kj') return data * 0.0041868;
        else if(target === 'j') return data * 4.1868;
        else if(target === 'mj') return data * 0.0000041868;
        else if(target === 'kcal') return data * 0.001;
    }

    function kilocalorie(data, target){
        target = target.toLowerCase();
        if(target === 'kj') return data * 4.1868;
        else if(target === 'j') return data * 4186.8;
        else if(target === 'mj') return data * 0.0041868;
        else if(target === 'cal') return data * 1000;
    }

    convert.Energy = function(data, source, target){
        if(isNumber(data)){
            source = source.toLowerCase();
            if (source === 'kj') return kilojoule(data, target);
            else if (source === 'j') return joule(data, target);
            else if (source === 'mj') return megajoule(data, target);
            else if (source === 'cal') return calorie(data, target);
            else if (source === 'kcal') return kilocalorie(data, target);
        }else return false;
    };

    return convert;
}));

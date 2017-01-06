/*!
 * convert.js 0.0.1
 * Author: Ertuğrul Üngör
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

    convert.metric = function(data, source, target){
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


    return convert;
}));

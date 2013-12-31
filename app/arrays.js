if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        for(var i=0; i<arr.length; i++){
            if(arr[i] == item){
                return i;
            }
        }
        return -1;
    },

    sum : function(arr) {
        var sum=0;
        for(var i=0; i<arr.length; i++){
            sum += arr[i];
        }       
        return sum;
    },

    remove : function(arr, item) {
        for(var i=0; i<arr.length; i++){
            if(arr[i] == item){
                arr.splice(i,1);
                return arr;
            }
        }
    },

    removeWithoutCopy : function(arr, item) {

    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift(arr);
        return arr;
    },

    concat : function(arr1, arr2) {

    },

    insert : function(arr, item, index) {
        arr.splice(index,0,item);
    },

    count : function(arr, item) {
        var sum=0;
        for (var i=0; i<arr.length; i++){
            if(arr[i]==item){
                sum++;
            }
        }
        return sum;
    },

    duplicates : function(arr) {

    },

    square : function(arr) {
        for(var i=0; i<arr.length; i++){
            arr[i] = arr[i]*arr[i];
        }
        return arr;
    },

    findAllOccurrences : function(arr, target) {

    }
  };
});

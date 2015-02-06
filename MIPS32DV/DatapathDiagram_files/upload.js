/**
 * Created by Josh on 12/11/2014.
 */

/**
 * This sets an anonymous function to be called when document.ready() is
 *  called.
 */
$(document).ready(function(){

    $('#file').on('change', function(e){

        readFile(this.files[0], function(e) {

            var stringList
                = [str2ab(document.getElementById('file').files[0].name),
                str2ab(this.result)];
            console.log(this.result);
            opener.window.postMessage(stringList, "*");
            window.close()
        });

    });
});

/**
 * This function takes a file and a callback and reads the file into the callback.
 *
 * @param file - the file to be read.
 * @param callback - the place to load the reader.
 */
function readFile(file, callback){
    var reader = new FileReader();
    reader.onload = callback;
    reader.readAsText(file);
}

/**
 * This function creates an array to serve as a buffer to read in a file
 *
 * @param str -  the contents of the file
 * @return (ArrayBuffer) - the buffer to use when reading the file.
 */
function str2ab(str) {
    var buf = new ArrayBuffer(str.length*2); // 2 bytes for each char
    var bufView = new Uint16Array(buf);
    for (var i= 0, strLen=str.length; i < strLen; i++)
    {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}
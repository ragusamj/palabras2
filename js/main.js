/**
 * Created by alexbol on 1/8/2015.
 */
require.config({
    urlArgs: "bust=" + (new Date()).getTime()
});
require(['models/quiz','models/app','models/palabra',
        'collections/categories','collections/quizItems',
        'views/textbox','views/quizView','views/selectCategory',
        'views/addItemForm', 'views/editItemForm'],
    function (Quiz /*appStage, Palabra, categories, Textbox, Quiz*/) {

        Parse.initialize("nNSG5uA8wGI1tWe4kaPqX3pFFplhc0nV5UlyDj8H", "IDxfUbmW9AIn7iej2PAC7FtDAO1KvSdPuqP18iyu");

    });


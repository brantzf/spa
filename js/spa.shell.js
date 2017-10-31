/*
 * spa.shell.js
 * Shell module for SPA
*/

spa.shell = (function() {
    // ---------- BEGIN MODULE SCOPE VARIABLES ----------
    var 
        configMap = {
            main_html: ''
                +'<div class="spa-shell-head">'
                +'    <div class="spa-shell-head-logo"></div>'
                +'    <div class="spa-shell-head-acct"></div>'
                +'    <div class="spa-shell-head-search"></div>'
                +'</div>'
                +'<div class="spa-shell-main">'
                +'    <div class="spa-shell-main-nav"></div>'
                +'    <div class="spa-shell-main-content"></div>'
                +'</div>'
                +'<div class="spa-shell-foot"></div>'
                +'<div class="spa-shell-chat"></div>'
                +'<div class="spa-shell-modal"></div>'
        },
        // 存储整个模块中共享的动态信息
        stateMap = {
            $container : null
        },
        // 将jQuery集合缓存在Map中
        jqueryMap = {},

        setJqueryMap, initModule;
        // ---------- END MODULE SCOPE VARIABLES ----------

        // ---------- BEGIN UTILITY METHODS ---------
        // ---------- END UTILITY METHODS ---------

        // ---------- BEGIN DOM METHODS ---------
        // Begin Dom method /setJqueryMap/
        setJqueryMap = function() {
            var $container = stateMap.$container;
            jqueryMap = {$container: $container}
        };
        // End Dom method /setJqueryMap/
        // ---------- END DOM METHODS ---------

        // ---------- BEGIN EVNET HANDLERS ---------
        // ---------- END EVNET HANDLERS ---------

        // ---------- BEGIN PUBLIC METHODS ---------
        // Begin Public method /initModule/
        initModule = function ($container) {
            stateMap.$container = $container;
            $container.html(configMap.main_html);
            setJqueryMap();
        }
        // End Public method /initModule/

        return {initModule: initModule}
        // ---------- END PUBLIC METHODS ---------
}());
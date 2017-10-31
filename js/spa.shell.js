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
                +'<div class="spa-shell-modal"></div>',

            chat_extend_time: 1000,
            chat_retract_time: 300,
            chat_extend_height: 450,
            chat_retract_height: 15
        },
        // 存储整个模块中共享的动态信息
        stateMap = {
            $container : null
        },
        // 将jQuery集合缓存在Map中
        jqueryMap = {},

        setJqueryMap, toggleChat, initModule;
        // ---------- END MODULE SCOPE VARIABLES ----------

        // ---------- BEGIN UTILITY METHODS ---------
        // ---------- END UTILITY METHODS ---------

        // ---------- BEGIN DOM METHODS ---------
        // Begin Dom method /setJqueryMap/
        setJqueryMap = function() {
            var $container = stateMap.$container;
            jqueryMap = {
                $container: $container,
                $chat: $container.find('.spa-shell-chat')
            };
        };
        // End Dom method /setJqueryMap/

        // Begin Dom method /toggleChat/
        // Purpose: Extends or retracts chat slider
        toggleChat = function(do_extend, callback) {
            var
                px_chat_ht = jqueryMap.$chat.height(),
                is_open = px_chat_ht === configMap.chat_extend_height,
                is_closed = px_chat_ht === configMap.chat_retract_height,
                is_sliding = !is_open && !is_closed;

            // avoid race condition
            if (is_sliding) { return false; }

            // Begin extend chat slider
            if (do_extend) {
                jqueryMap.$chat.animate(
                    {height: configMap.chat_extend_height},
                    configMap.chat_extend_time,
                    function() {
                        if (callback) { callback(jqueryMap.$chat); }
                    }
                );
                return true;
            }
            // End extend chat slider
            
            // Begin retract chat slider
            jqueryMap.$chat.animate(
                {height: configMap.chat_retract_height},
                configMap.chat_retract_time,
                function() {
                    if (callback) { callback(jqueryMap.$chat); }
                }
            );
            return true;
            // End retract chat slider
        };
        // End Dom method /toggleChat/

        // ---------- END DOM METHODS ---------

        // ---------- BEGIN EVNET HANDLERS ---------
        // ---------- END EVNET HANDLERS ---------

        // ---------- BEGIN PUBLIC METHODS ---------
        // Begin Public method /initModule/
        initModule = function ($container) {
            // load HTML and map jQuery collections
            stateMap.$container = $container;
            $container.html(configMap.main_html);
            setJqueryMap();

            // test toogle
            setTimeout(function() {
                toggleChat(true)
            }, 3000);

            setTimeout(function() {
                toggleChat(false)
            }, 8000);
        }
        // End Public method /initModule/

        return {initModule: initModule}
        // ---------- END PUBLIC METHODS ---------
}());
/**
 * @description Input mask widget
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
define(['jquery', 'D3p1_InputMask/js/lib/imask'], function ($) {
    'use strict'

    $.widget('mage.imask', {
        /**
         * @type {Object}
         */
        options: {
            customConfig: null,
            mask: '',
            placeholder: '',
        },

        /**
         * @type {Object}
         */
        inputMask: {},

        /**
         * @type {String}
         */
        defaultValue: '',

        /**
         * Creation
         *
         * @returns {void}
         * @private
         */
        _create: function () {
            var self   = this
            var config = {
                mask: self.options.mask,
                placeholderChar: self.options.placeholder,
                lazy: false,
            }

            if (self.options.customConfig) {
                config = self.options.customConfig
            }

            self.inputMask    = IMask(self.element[0], config)
            self.defaultValue = self.element.val()

            this.element.addClass('imask')

            self._addDynamicStyles()

            self.element.on('blur', function () {
                self._addDynamicStyles()
            })
        },

        /**
         * Add dynamic styles
         *
         * @returns {void}
         * @private
         */
        _addDynamicStyles: function () {
            /**
             * @note Check if input has not value to add a class to empty input
             */
            this.element.toggleClass(
                'imask-empty',
                this.element.val() === this.defaultValue,
            )
        },
    })

    return $.mage.imask
})

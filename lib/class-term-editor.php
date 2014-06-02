<?php
/**
 * TermEditor
 *
 * lib-term-editor
 * http://github.com/UsabilityDynamics/lib-term-editor
 */
namespace UsabilityDynamics {

  if( !class_exists( 'UsabilityDynamics\TermEditor' ) ) {

    class TermEditor {

      /**
       * Module Path.
       *
       * @public
       * @static
       * @property $path
       * @type {string}
       */
      static public $path = null;

      /**
       * Intialize TermEditor.
       *
       * @param $parent
       * @param $module
       *
       */
      public function __construct( $parent = array(), $module = array() ) {

        try {

          // Initialize Module.

        }  catch( \Exception $error ) {
          trigger_error($error->getMesage() );
        }

      }

    }

  }

}
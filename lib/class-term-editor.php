<?php
/**
 * Name: Term Editor
 * Class: UsabilityDynamics\TermEditor
 * Version: 0.1.0
 * Description: Taxonomy Editor Interface.
 * Slug: term-editor
 *
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
       * @method __construct
       */
      public function __construct( $parent = array(), $module = array() ) {

        try {

          // Initialize Module.

          // __( 'Initializing Term Editor', 'term-editor' );


        } catch( \Exception $error ) {
          trigger_error( $error->getMesage() );
        }

      }

      /**
       * Initialize on Admin
       *
       * @method admin_init
       */
      public static function admin_init() {

      }

    }

  }

}
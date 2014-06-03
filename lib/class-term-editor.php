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
       * Settings.
       *
       * @var null|\UsabilityDynamics\Settings
       */
      private $_settings = null;

      /**
       * Parent Product.
       *
       * @var array|null
       */
      private $_parent = null;

      /**
       * Intialize TermEditor.
       *
       * @param $parent
       * @param $settings
       *
       * @method __construct
       */
      public function __construct( $parent = array(), $settings = array() ) {

        try {

          // Initialize Module.
          require_once( __DIR__ . '/class-term-editor-exception.php' );
          require_once( __DIR__ . '/class-term-editor-utility.php' );

          self::$path = dirname( __DIR__ );

          // Set Parent.
          $this->_parent = $parent;

          // Set Settings
          $this->_setings = $settings;

        } catch( Exception $error ) {
          trigger_error( $error->getMesage() );
        }

      }

      /**
       * Initialize on Admin
       *
       * @method admin_init
       */
      public static function admin_init() {

        // __( 'Initializing Term Editor', 'term-editor' );

      }

    }

  }

}
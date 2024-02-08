<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'saurabh' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'O djIyU#5Sl!|!d_/w6aXa},!Lk@*}ln^,B#3CYWyFvQ}b??Vt:0g5.oVo}lkh2#' );
define( 'SECURE_AUTH_KEY',  '<fL%8&9l)45|FP3,p!(X(IIOru2,c2>u2.pS`^/)vrSoPhW#*{ROIh>1xR1twI!F' );
define( 'LOGGED_IN_KEY',    'JVyLu5w}mYCH1@uJ)`,OqSUS2+2qI`},06Bt@|/9rl@8pwvkqQ*OZAXJzyD6VI-:' );
define( 'NONCE_KEY',        ')CoK%4d/p<i%=3>qkm$o!c}Zf*K!|-O!cqsXzU1y{pbhFaqwt(5?,7pPmQuj+;Jh' );
define( 'AUTH_SALT',        'X##CQnRyN[AN?45Ud_Nw>+R`P qWuH+G$TSFQ:InM:zF5{26Aj]7i&Q,L]}!%cC3' );
define( 'SECURE_AUTH_SALT', 'E(STIrjI3pkX<OA-]RNol>vTobvNnKk@A&8j.p;?0s}#}FA1+MVf#&u{FHVDzvmB' );
define( 'LOGGED_IN_SALT',   'q6]hD=gHc9XbW#aC,_(I*CuzOv$Aj`bJr;OW7pDim}_W/Th.0N^YrnVL8A1C~VxY' );
define( 'NONCE_SALT',       'U/z(X+rH?sXxvC]J8]tG:IS{<)$G)j7rcVa?+*r:3`[6iAY2AudIe`m7^PzHkkYu' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

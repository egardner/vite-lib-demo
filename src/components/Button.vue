<template>
	<button
		class="sd-button"
		:class="builtInClasses"
		:disabled="disabled"
		@click="$emit( 'click' )"
	>
		<sd-icon v-if="icon" :icon="icon"></sd-icon>
		<span class="sd-button__content">
			<slot></slot>
		</span>
	</button>
</template>

<script>
import { defineComponent } from 'vue';
import Icon from './Icon.vue';

/**
 * Button with optional icon.
 */
export default defineComponent( {
	name: 'SdButton',

	components: {
		'sd-icon': Icon
	},

	props: {
		disabled: {
			type: Boolean
		},

		frameless: {
			type: Boolean
		},

		// Icon path or object. See Icon.vue for valid icon formats.
		icon: {
			type: [ String, Object ],
			default: null
		},

		// Set to true to hide text node.
		invisibleText: {
			type: Boolean
		},

		// In OOUI, flags are passed in as an array (or a string or an object)
		// and are handled by a separate mixin. Passing them in individually is
		// a bit more readable and intuitive, plus it makes the code in this
		// component simpler.
		progressive: {
			type: Boolean
		},

		destructive: {
			type: Boolean
		},

		primary: {
			type: Boolean
		}
	},

	computed: {
		builtInClasses () {
			return {
				'sd-button--framed': !this.frameless,
				'sd-button--icon': this.icon,
				'sd-button--invisible-text': this.invisibleText,
				'sd-button--progressive': this.progressive,
				'sd-button--destructive': this.destructive,
				'sd-button--primary': this.primary
			};
		}
	}
} );
</script>

<style lang="less">
@import "../mediawiki.mixins.less";
@import "../variables.less";

.sd-button {
	.transition( ~'background-color 100ms, color 100ms, border-color 100ms, box-shadow 100ms' );
	background-color: transparent;
	border: @border-width-base @border-style-base transparent;
	border-radius: 2px;
	color: @color-base;
	cursor: pointer;
	font-size: inherit;
	font-weight: bold;
	padding: 6px;
	user-select: none;

	&:hover {
		background-color: rgba( 0, 24, 73, ( 7 / 255 ) );
		color: @color-base--emphasized;
	}

	&:focus {
		border-color: @color-primary;
		box-shadow: @box-shadow-base--focus;
		outline: 0;
	}

	.sd-icon {
		height: 100%;
		left: unit( ( 5 / 14 ), em );
		position: absolute;
		top: 0;
		transition: opacity 100ms;
	}

	// Variants.
	&--icon {
		padding-left: unit( ( 30 / 14 ), em );
		position: relative;
	}

	&--framed {
		background-color: @background-color-framed;
		border-color: @border-color-base;
		padding: 6px 12px;

		&:hover {
			background-color: @background-color-framed--hover;
			color: @color-base--hover;
		}

		&.sd-button--icon {
			padding-left: unit( ( 38 / 14 ), em );
			position: relative;
		}

		/* stylelint-disable-next-line no-descending-specificity */
		.sd-icon {
			left: unit( ( 11 / 14 ), em);
		}
	}

	&--progressive {
		color: @color-primary;

		&:hover {
			color: @color-primary--hover;
		}

		&.sd-button--framed {
			&:hover {
				border-color: @color-primary--hover;
			}
		}
	}

	&--destructive {
		color: @color-destructive;

		&:hover {
			color: @color-destructive--hover;
		}

		&:focus {
			border-color: @color-destructive;
			box-shadow: inset 0 0 0 1px @color-destructive;
		}

		&.sd-button--framed {
			&:hover {
				border-color: @color-destructive--hover;
			}

			&:focus {
				box-shadow: inset 0 0 0 1px @color-destructive inset 0 0 0 2px
					@color-base--inverted;
			}
		}
	}

	&--primary {
		&.sd-button--framed {
			// Default to progressive.
			background-color: @color-primary;
			border-color: @color-primary;
			color: @color-base--inverted;

			&:hover {
				background-color: @color-primary--hover;
				border-color: @color-primary--hover;
			}

			&:focus {
				box-shadow: @box-shadow-primary--focus;
			}

			&.sd-button--destructive {
				background-color: @color-destructive;
				border-color: @color-destructive;

				&:hover {
					background-color: @color-destructive--hover;
					border-color: @color-destructive--hover;
				}

				&:focus {
					box-shadow: inset 0 0 0 1px @color-destructive inset 0 0 0 2px
						@color-base--inverted;
				}
			}
		}
	}

	&--invisible-text {
		padding: unit( ( 30/14 ), em ) 0 0 unit( ( 30/14 ), em );

		.sd-button__content {
			border: 0;
			clip: rect( 1px, 1px, 1px, 1px );
			display: block;
			height: 1px;
			margin: -1px;
			overflow: hidden;
			padding: 0;
			position: absolute;
			width: 1px;
		}

		.sd-icon {
			left: 50%;
			transform: translateX( -50% );
		}
	}

	&:disabled {
		color: @color-base--disabled;
		cursor: auto;

		&:hover,
		&:focus {
			background-color: @background-color-base;
		}

		&.sd-button--framed {
			background-color: @background-color-filled--disabled;
			border-color: @border-color-base--disabled;
			color: @color-base--inverted;

			&:hover,
			&:focus {
				background-color: @background-color-filled--disabled;
				border-color: @border-color-base--disabled;
				box-shadow: none;
			}
		}

		&:not( .sd-button--framed ) .sd-icon {
			opacity: @opacity-base--disabled;
		}
	}
}
</style>

// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { SymbolWeight, SymbolViewProps } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

type IconMapping = Record<SymbolViewProps['name'], ComponentProps<typeof MaterialIcons>['name']>;
type IconMapping2 = Record<SymbolViewProps2['name'], ComponentProps2<typeof Entypo>['name']>;
type IconSymbolName = keyof typeof MAPPING;

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
  'house.fill': 'home',
  'person.fill': 'person',
  'music.note': 'music-note',
  'paperplane.fill': 'send',
  'party.popper.fill': 'party-popper',
  'heart.fill': 'heart',
  'movieclapper.fill': 'movie-open',
  'play.tv': 'live-tv',
  'calendar': 'calendar-month',
  'sun.max.fill': 'white-balance-sunny',
  'tennis.racket': 'tennis',
  'camera.fill': 'camera',
  'fork.knife': 'silverware-fork-knife',
  'pawprint.fill': 'pets',
  'lightbulb.fill': 'lightbulb',
  'bolt.fill': 'lightnin-bolt',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
} as IconMapping;

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
}

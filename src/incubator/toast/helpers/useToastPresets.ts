import 'react';
import {Colors} from 'style';
import {ToastProps, ToastPreset} from '../types';

const checkMarkIcon = require('../assets/checkmarkFlat.png');
const exclamationIcon = require('../assets/exclamationFill.png');
const infoIcon = require('../assets/info.png');
const redCloudIcon = require('../assets/redCloud.png');

const TOAST_PRESETS = {
  [ToastPreset.GENERAL]: {
    icon: infoIcon,
    iconColor: Colors.getColorTint(Colors.primary, 50),
    accessibilityMessagePrefix: ''
  },
  [ToastPreset.SUCCESS]: {
    icon: checkMarkIcon,
    iconColor: Colors.green40,
    accessibilityMessagePrefix: 'Success'
  },
  [ToastPreset.FAILURE]: {
    icon: exclamationIcon,
    iconColor: Colors.red40,
    accessibilityMessagePrefix: 'Alert'
  },
  [ToastPreset.OFFLINE]: {
    icon: redCloudIcon,
    iconColor: Colors.getColorTint(Colors.primary, 50),
    accessibilityMessagePrefix: 'Offline'
  }
};

export default ({preset, icon, iconColor, message}: Pick<ToastProps, 'preset' | 'icon' | 'message' | 'iconColor'>) => {
  const toastPreset = preset ? TOAST_PRESETS[preset] : undefined;

  return {
    icon: icon ?? toastPreset?.icon,
    iconColor: iconColor ?? toastPreset?.iconColor,
    accessibilityMessage: `${toastPreset?.accessibilityMessagePrefix} notification, ${message}`
  };
};

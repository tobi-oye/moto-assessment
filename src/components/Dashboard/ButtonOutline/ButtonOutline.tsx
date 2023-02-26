import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ButtonOutline.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    outlineButton?: ReactNode;
  };
}
/* @figmaId 1:2 */
export const ButtonOutline: FC<Props> = memo(function ButtonOutline(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.outlineButton != null ? (
        props.text?.outlineButton
      ) : (
        <div className={classes.outlineButton}>Outline Button</div>
      )}
    </button>
  );
});

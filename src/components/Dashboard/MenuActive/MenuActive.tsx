import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { UHomeAlt } from '../UHomeAlt/UHomeAlt.js';
import classes from './MenuActive.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    dashboard?: ReactNode;
  };
}
/* @figmaId 1:4 */
export const MenuActive: FC<Props> = memo(function MenuActive(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle4}></div>
      {props.text?.dashboard != null ? props.text?.dashboard : <div className={classes.dashboard}>Dashboard</div>}
      <UHomeAlt
        className={classes.uHomeAlt}
        swap={{
          vector: <VectorIcon className={classes.icon} />,
        }}
      />
    </div>
  );
});

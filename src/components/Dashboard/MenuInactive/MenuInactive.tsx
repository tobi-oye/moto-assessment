import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { UStore } from '../UStore/UStore.js';
import { BaseIcon } from './BaseIcon.js';
import classes from './MenuInactive.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    uStore?: ReactNode;
  };
  text?: {
    autocenters?: ReactNode;
  };
}
/* @figmaId 1:14 */
export const MenuInactive: FC<Props> = memo(function MenuInactive(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle4}></div>
      {props.text?.autocenters != null ? (
        props.text?.autocenters
      ) : (
        <div className={classes.autocenters}>Autocenters</div>
      )}
      {props.swap?.uStore || (
        <UStore
          className={classes.uStore}
          swap={{
            vector: <VectorIcon className={classes.icon} />,
          }}
        />
      )}
    </div>
  );
});

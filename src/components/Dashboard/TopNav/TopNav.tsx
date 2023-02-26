import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { AvatarIcon } from './AvatarIcon.js';
import { IconsSystemNavigationBarBackIc } from './IconsSystemNavigationBarBackIc.js';
import classes from './TopNav.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 1:199 */
export const TopNav: FC<Props> = memo(function TopNav(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
      <div className={classes.profile}>
        <div className={classes.avatar}>
          <AvatarIcon className={classes.icon2} />
        </div>
        <div className={classes.iconsSystemNavigationBarBack}>
          <IconsSystemNavigationBarBackIc className={classes.icon3} />
        </div>
        <div className={classes.rectangle}></div>
      </div>
      <div className={classes.dashboard}>Dashboard</div>
    </div>
  );
});

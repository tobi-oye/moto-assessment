import { memo } from "react";
import type { FC } from "react";
import MotoLogo from "../../assets/logos/moto-logo.png";
import resets from "../_resets.module.css";
import { Arrow1Icon } from "./Arrow1Icon.js";
import { Arrow2Icon } from "./Arrow2Icon.js";
import { Arrow3Icon } from "./Arrow3Icon.js";
import { AvatarsProfileMembers1Icon } from "./AvatarsProfileMembers1Icon.js";
import { ButtonOutline } from "./ButtonOutline/ButtonOutline.js";
import { ChevronDown1Icon } from "./ChevronDown1Icon.js";
import classes from "./Dashboard.module.css";
import { Document1Icon } from "./Document1Icon.js";
import { EllipseIcon2 } from "./EllipseIcon2.js";
import { EllipseIcon3 } from "./EllipseIcon3.js";
import { EllipseIcon4 } from "./EllipseIcon4.js";
import { EllipseIcon5 } from "./EllipseIcon5.js";
import { EllipseIcon6 } from "./EllipseIcon6.js";
import { EllipseIcon7 } from "./EllipseIcon7.js";
import { EllipseIcon8 } from "./EllipseIcon8.js";
import { EllipseIcon } from "./EllipseIcon.js";
import { FiBarChart2 } from "./FiBarChart2/FiBarChart2.js";
import { Files1Icon } from "./Files1Icon.js";
import { Logo1Icon } from "./Logo1Icon.js";
import { MenuActive } from "./MenuActive/MenuActive.js";
import { MenuInactive } from "./MenuInactive/MenuInactive.js";
import { Path31Icon2 } from "./Path31Icon2.js";
import { Path31Icon3 } from "./Path31Icon3.js";
import { Path31Icon } from "./Path31Icon.js";
import { PolygonIcon } from "./PolygonIcon.js";
import { TopNav } from "./TopNav/TopNav.js";
import { UFolderOpen } from "./UFolderOpen/UFolderOpen.js";
import { UMessage } from "./UMessage/UMessage.js";
import { UNotebooks } from "./UNotebooks/UNotebooks.js";
import { USetting } from "./USetting/USetting.js";
import { UUsersAlt } from "./UUsersAlt/UUsersAlt.js";
import { VectorIcon2 } from "./VectorIcon2.js";
import { VectorIcon3 } from "./VectorIcon3.js";
import { VectorIcon4 } from "./VectorIcon4.js";
import { VectorIcon5 } from "./VectorIcon5.js";
import { VectorIcon6 } from "./VectorIcon6.js";
import { VectorIcon7 } from "./VectorIcon7.js";
import { VectorIcon8 } from "./VectorIcon8.js";
import { VectorIcon9 } from "./VectorIcon9.js";
import { VectorIcon10 } from "./VectorIcon10.js";
import { VectorIcon } from "./VectorIcon.js";

interface Props {
  className?: string;
}
/* @figmaId 1:59 */
export const Dashboard: FC<Props> = memo(function Dashboard(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle8}></div>
      <div className={classes.textSubHeading}>Overview</div>
      <div className={classes.rectangle22}></div>
      <div className={classes.line6}></div>
      <div className={classes.line7}></div>
      <div className={classes.path31}>
        <Path31Icon className={classes.icon10} />
      </div>
      <div className={classes.statsData}>228</div>
      <div className={classes.statsTitle}>Autocentres</div>
      <div className={classes.statsData2}>+3</div>
      <div className={classes.polygon}>
        <PolygonIcon className={classes.icon11} />
      </div>
      <div className={classes.path312}>
        <Path31Icon2 className={classes.icon12} />
      </div>
      <div className={classes.statsData3}>44</div>
      <div className={classes.statsTitle2}>Forms Created</div>
      <div className={classes.path313}>
        <Path31Icon3 className={classes.icon13} />
      </div>
      <div className={classes.statsData4}>QWG3O32K</div>
      <div className={classes.statsTitle3}>Organization Key</div>
      <div className={classes.textSubHeading2}>Last 7 days</div>
      <div className={classes.chevronDown1}>
        <ChevronDown1Icon className={classes.icon14} />
      </div>
      <div className={classes.rectangle23}></div>
      <div className={classes.textSubHeading3}>Create new</div>
      <div className={classes.textSubHeading4}>Form</div>
      <div className={classes.rectangle29}></div>
      <div className={classes.document1}>
        <Document1Icon className={classes.icon15} />
      </div>
      <div className={classes.arrow1}>
        <Arrow1Icon className={classes.icon16} />
      </div>
      <div className={classes.rectangle24}></div>
      <div className={classes.textSubHeading5}>Create new</div>
      <div className={classes.textSubHeading6}>Dispatch</div>
      <div className={classes.rectangle292}></div>
      <div className={classes.files1}>
        <Files1Icon className={classes.icon17} />
      </div>
      <div className={classes.arrow2}>
        <Arrow2Icon className={classes.icon18} />
      </div>
      <div className={classes.rectangle25}></div>
      <div className={classes.textSubHeading7}>Create new</div>
      <div className={classes.textSubHeading8}>Autocenter</div>
      <div className={classes.rectangle293}></div>
      <div className={classes.avatarsProfileMembers1}>
        <AvatarsProfileMembers1Icon className={classes.icon19} />
      </div>
      <div className={classes.arrow3}>
        <Arrow3Icon className={classes.icon20} />
      </div>
      <div className={classes.textSubHeading9}>Key actions</div>
      <div className={classes.line}></div>
      <div className={classes.sLAABCenter1}>SLAAB Center 1</div>
      <div className={classes.ellipse}>
        <EllipseIcon className={classes.icon21} />
      </div>
      <div className={classes.sC}>SC</div>
      <div className={classes.line2}></div>
      <div className={classes.sLAABCenter12}>SLAAB Center 1</div>
      <div className={classes.ellipse2}>
        <EllipseIcon2 className={classes.icon22} />
      </div>
      <div className={classes.sC2}>SC</div>
      <div className={classes.line3}></div>
      <div className={classes.sLAABCenter13}>SLAAB Center 1</div>
      <div className={classes.ellipse3}>
        <EllipseIcon3 className={classes.icon23} />
      </div>
      <div className={classes.sC3}>SC</div>
      <div className={classes.line4}></div>
      <div className={classes.fashianoAutos}>Fashiano Autos</div>
      <div className={classes.ellipse4}>
        <EllipseIcon4 className={classes.icon24} />
      </div>
      <div className={classes.fA}>FA</div>
      <div className={classes.line5}></div>
      <div className={classes.sLAABCenter14}>SLAAB Center 1</div>
      <div className={classes.ellipse5}>
        <EllipseIcon5 className={classes.icon25} />
      </div>
      <div className={classes.sC4}>SC</div>
      <div className={classes.line8}></div>
      <div className={classes.sLAABCenter15}>SLAAB Center 1</div>
      <div className={classes.ellipse6}>
        <EllipseIcon6 className={classes.icon26} />
      </div>
      <div className={classes.sC5}>SC</div>
      <div className={classes.line9}></div>
      <div className={classes.sLAABCenter16}>SLAAB Center 1</div>
      <div className={classes.ellipse7}>
        <EllipseIcon7 className={classes.icon27} />
      </div>
      <div className={classes.sC6}>SC</div>
      <div className={classes.line10}></div>
      <div className={classes.sLAABCenter17}>SLAAB Center 1</div>
      <div className={classes.ellipse8}>
        <EllipseIcon8 className={classes.icon28} />
      </div>
      <div className={classes.sC7}>SC</div>
      <div className={classes.textFormLastEdit}>Added 500 agents</div>
      <div className={classes.textFormLastEdit2}>Requested forms list</div>
      <div className={classes.textFormLastEdit3}>Requested forms list</div>
      <div className={classes.textFormLastEdit4}>Requested forms list</div>
      <div className={classes.textFormLastEdit5}>Requested forms list</div>
      <div className={classes.textFormLastEdit6}>Requested forms list</div>
      <div className={classes.textFormLastEdit7}>Requested forms list</div>
      <div className={classes.textFormLastEdit8}>Requested forms list</div>
      <div className={classes.inputTextText}>Event</div>
      <div className={classes.textFormLastEdit9}>02/05/2019 - 10:30pm</div>
      <div className={classes.textFormLastEdit10}>02/05/2019 - 10:30pm</div>
      <div className={classes.textFormLastEdit11}>02/05/2019 - 10:30pm</div>
      <div className={classes.textFormLastEdit12}>02/05/2019 - 10:30pm</div>
      <div className={classes.textFormLastEdit13}>02/05/2019 - 10:30pm</div>
      <div className={classes.textFormLastEdit14}>02/05/2019 - 10:30pm</div>
      <div className={classes.textFormLastEdit15}>02/05/2019 - 10:30pm</div>
      <div className={classes.textFormLastEdit16}>02/05/2019 - 10:30pm</div>
      <div className={classes.inputTextText2}>Date/Time</div>
      <div className={classes.inputTextText3}>User</div>
      <div className={classes.textSubHeading10}>Activity log</div>
      <ButtonOutline
        className={classes.buttonOutline}
        text={{
          outlineButton: (
            <div className={classes.viewMoreActivity}>View more activity</div>
          ),
        }}
      />
      <TopNav />
      <div className={classes.sideNav}>
        <div className={classes.vector}>
          <VectorIcon className={classes.icon29} />
        </div>
        <div className={classes.line16}></div>
        <MenuActive
          className={classes.menuActive}
          text={{
            dashboard: <div className={classes.dashboard}>Dashboard</div>,
          }}
        />
        <MenuInactive className={classes.menuInactive} />
        <MenuInactive
          className={classes.menuInactive2}
          swap={{
            uStore: (
              <UNotebooks
                className={classes.uNotebooks}
                swap={{
                  vector: <VectorIcon2 className={classes.icon} />,
                }}
              />
            ),
          }}
          text={{
            autocenters: <div className={classes.forms}>Forms</div>,
          }}
        />
        <MenuInactive
          className={classes.menuInactive3}
          swap={{
            uStore: (
              <UFolderOpen
                className={classes.uFolderOpen}
                swap={{
                  vector: <VectorIcon3 className={classes.icon2} />,
                }}
              />
            ),
          }}
          text={{
            autocenters: <div className={classes.resources}>Resources</div>,
          }}
        />
        <MenuInactive
          className={classes.menuInactive4}
          swap={{
            uStore: (
              <UMessage
                className={classes.uMessage}
                swap={{
                  vector: <VectorIcon4 className={classes.icon3} />,
                }}
              />
            ),
          }}
          text={{
            autocenters: <div className={classes.dispatch}>Dispatch</div>,
          }}
        />
        <MenuInactive
          className={classes.menuInactive5}
          swap={{
            uStore: (
              <UUsersAlt
                className={classes.uUsersAlt}
                swap={{
                  vector: <VectorIcon5 className={classes.icon4} />,
                }}
              />
            ),
          }}
          text={{
            autocenters: <div className={classes.groups}>Groups</div>,
          }}
        />
        <MenuInactive
          className={classes.menuInactive6}
          swap={{
            uStore: (
              <FiBarChart2
                className={classes.fiBarChart2}
                swap={{
                  vector: <VectorIcon6 className={classes.icon5} />,
                  vector2: <VectorIcon7 className={classes.icon6} />,
                  vector3: <VectorIcon8 className={classes.icon7} />,
                }}
              />
            ),
          }}
          text={{
            autocenters: <div className={classes.report}>Report</div>,
          }}
        />
        <MenuInactive
          className={classes.menuInactive7}
          swap={{
            uStore: (
              <USetting
                className={classes.uSetting}
                swap={{
                  vector: <VectorIcon9 className={classes.icon8} />,
                }}
              />
            ),
          }}
          text={{
            autocenters: (
              <div className={classes.financeSheet}>Finance sheet</div>
            ),
          }}
        />
        <MenuInactive
          className={classes.menuInactive8}
          swap={{
            uStore: (
              <USetting
                className={classes.uSetting2}
                swap={{
                  vector: <VectorIcon10 className={classes.icon9} />,
                }}
              />
            ),
          }}
          text={{
            autocenters: <div className={classes.settings}>Settings</div>,
          }}
        />
        <div className={classes.logo1}>
          {/* <Logo1Icon className={classes.icon30} /> */}
          <img src={MotoLogo} alt="moto logo" />
        </div>
      </div>
    </div>
  );
});

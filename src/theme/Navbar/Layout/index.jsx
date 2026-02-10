// import React, { useEffect, useState } from "react";
// import { logout, getSession } from "@site/src/utils/session";

// export default function NavbarContent() {
//   const [session, setSession] = useState(null);

//   useEffect(() => {
//     setSession(getSession());
//   }, []);

//   if (!session) return null;

//   return (
//     <div style={{ marginLeft: "auto", paddingRight: 16 }}>
//       👤 {session.name}
//       <button
//         style={{ marginLeft: 10 }}
//         onClick={() => {
//           logout();
//           window.location.href = "/";
//         }}
//       >
//         Logout
//       </button>
//     </div>
//   );
// }

// import React from 'react';
// import NavbarItem from '@theme/NavbarItem';
// import { useNavbarItems } from '@docusaurus/theme-common';
// import NavbarUser from '@site/src/components/NavbarContent';
// import styles from './styles.module.css';

// export default function NavbarContent() {
//   const items = useNavbarItems();

//   return (
//     <>
//       {/* LEFT ITEMS */}
//       <div className={styles.navbarItems}>
//         {items
//           .filter((item) => item.position !== 'right')
//           .map((item, i) => (
//             <NavbarItem {...item} key={i} />
//           ))}
//       </div>

//       {/* RIGHT ITEMS */}
//       <div className={styles.navbarItemsRight}>
//         {items
//           .filter((item) => item.position === 'right')
//           .map((item, i) => (
//             <NavbarItem {...item} key={i} />
//           ))}

//         <NavbarUser />
//       </div>
//     </>
//   );
// }
import React from 'react';
import NavbarItem from '@theme/NavbarItem';
import NavbarUser from '@site/src/components/NavbarContent';
import styles from './styles.module.css';

export default function NavbarLayout({ items = [], children }) {
  const leftItems = items.filter(item => item.position !== 'right');
  const rightItems = items.filter(item => item.position === 'right');

  return (
    <nav className="navbar">
            {children}

      <div className="navbar__inner">

        {/* LEFT */}
        <div className="navbar__items">
          {leftItems.map((item, i) => (
            <NavbarItem {...item} key={i} />
          ))}
        </div>

        {/* RIGHT */}
        <div className="navbar__items navbar__items--right">
          {rightItems.map((item, i) => (
            <NavbarItem {...item} key={i} />
          ))}
          <NavbarUser />
        </div>

      </div>
    </nav>
  );
}

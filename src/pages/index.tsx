// import type {ReactNode} from 'react';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import Heading from '@theme/Heading';

// import styles from './index.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default function Home(): ReactNode {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Hello from ${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />">
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }
import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import users from "../../data/users.json";
import { useHistory } from "@docusaurus/router";
import { getSession, login, logout } from "../utils/session";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [session, setSession] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  useEffect(() => {
    setSession(getSession());
  }, []);

  const submit = () => {
    const user = users[mobile];

    if (!user) {
      setError("Access denied");
      return;
    }

    login(user);
    setSession({ name: user.name, role: user.role });
    setShowLogin(false);
    history.push(`/triline-doc/docs/${user.role}/project-guide`);
  };

  const doLogout = () => {
    logout();
    setSession(null);
    setMobile("");
    setShowLogin(false);
  };  

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <header className="hero hero--primary">
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>

    <div style={{ marginTop: 120, textAlign: "center" }}>
      {!session ? (
        <>
          <h2>Welcome to Documentation</h2>

          {!showLogin ? (
            <button onClick={() => setShowLogin(true)}>
              Login
            </button>
          ) : (
            <>
              <h3>Enter Mobile Number</h3>

              <input
                placeholder="Mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />

              <br /><br />

              <button onClick={submit}>Continue</button>
              <button
                style={{ marginLeft: 10 }}
                onClick={() => setShowLogin(false)}
              >
                Cancel
              </button>

              {error && <p style={{ color: "red" }}>{error}</p>}
            </>
          )}
        </>
      ) : (
        <>
          <h2>Welcome, {session.name} 👋</h2>
          <p>You are logged in as <b>{session.role}</b></p>

          <button onClick={() => history.push(`/triline-doc/docs/${session.role}/project-guide`)}>
            Go to Docs
          </button>

          <br /><br />

          <button onClick={doLogout}>Logout</button>
        </>
      )}
    </div>

      {/* <main style={{ padding: "3rem", textAlign: "center" }}>
        <h2>Welcome to Documentation Portal</h2>
        <p>Please login using the top menu to access your docs.</p>
      </main> */}
    </Layout>
  );
}

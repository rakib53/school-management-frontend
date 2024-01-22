import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";
import LOGO from "@assets/images/logo.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.sidebarContentWrapper}>
        <div className={styles.sidebarHeaderWrapper}>
          <Link className={styles.sidebarLogoWrapper} to={"/"}>
            <img
              className={styles.sidebarLogo}
              src={LOGO}
              alt="Daily task logo"
            />
          </Link>
        </div>

        <ul className={styles.sidebarNavbarWrapper}>
          <Link to={"/dashboard"} className={styles.sidebabrNavItems}>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="7" height="9" x="3" y="3" rx="1"></rect>
              <rect width="7" height="5" x="14" y="3" rx="1"></rect>
              <rect width="7" height="9" x="14" y="12" rx="1"></rect>
              <rect width="7" height="5" x="3" y="16" rx="1"></rect>
            </svg>
            <span className={styles.navLinks}>Dashboard</span>
          </Link>

          <Link to={"/students"} className={styles.sidebabrNavItems}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 256 256"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M226.53,56.41l-96-32a8,8,0,0,0-5.06,0l-96,32A8,8,0,0,0,24,64v80a8,8,0,0,0,16,0V75.1L73.59,86.29a64,64,0,0,0,20.65,88.05c-18,7.06-33.56,19.83-44.94,37.29a8,8,0,1,0,13.4,8.74C77.77,197.25,101.57,184,128,184s50.23,13.25,65.3,36.37a8,8,0,0,0,13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64,64,0,0,0,20.65-88l44.12-14.7a8,8,0,0,0,0-15.18ZM176,120A48,48,0,1,1,89.35,91.55l36.12,12a8,8,0,0,0,5.06,0l36.12-12A47.89,47.89,0,0,1,176,120ZM128,87.57,57.3,64,128,40.43,198.7,64Z"></path>
            </svg>
            <span className={styles.navLinks}>Students</span>
          </Link>

          <Link to={"/teachers"} className={styles.sidebabrNavItems}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 32 32"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 4 6 L 4 8 L 26 8 L 26 24 L 12 24 L 12 26 L 30 26 L 30 24 L 28 24 L 28 6 L 4 6 z M 8.0019531 9 C 5.8032706 9 4 10.802666 4 13 C 4 15.198683 5.8040743 17 8.0019531 17 C 10.197134 17 12 15.198683 12 13 C 12 10.802666 10.19794 9 8.0019531 9 z M 14 10 L 14 12 L 19 12 L 19 10 L 14 10 z M 21 10 L 21 12 L 24 12 L 24 10 L 21 10 z M 8.0019531 11 C 9.1159662 11 10 11.883334 10 13 C 10 14.119317 9.1167719 15 8.0019531 15 C 6.881832 15 6 14.119317 6 13 C 6 11.883334 6.8826357 11 8.0019531 11 z M 14 14 L 14 16 L 24 16 L 24 14 L 14 14 z M 4 18 L 4 26 L 6 26 L 6 20 L 9 20 L 9 26 L 11 26 L 11 20.658203 L 13.064453 21.75 C 13.648752 22.060158 14.351587 22.058921 14.935547 21.75 L 14.935547 21.751953 L 18.466797 19.884766 L 17.533203 18.115234 L 14.001953 19.982422 L 10.90625 18.347656 C 10.475078 18.120046 9.9935054 18 9.5039062 18 L 4 18 z"></path>
            </svg>
            <span className={styles.navLinks}>Teachers</span>
          </Link>

          <Link to={"/parents"} className={styles.sidebabrNavItems}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 9C8.38071 9 9.5 7.88071 9.5 6.5C9.5 5.11929 8.38071 4 7 4C5.61929 4 4.5 5.11929 4.5 6.5C4.5 7.88071 5.61929 9 7 9ZM7 11C4.51472 11 2.5 8.98528 2.5 6.5C2.5 4.01472 4.51472 2 7 2C9.48528 2 11.5 4.01472 11.5 6.5C11.5 8.98528 9.48528 11 7 11ZM17.5 13C18.6046 13 19.5 12.1046 19.5 11C19.5 9.89543 18.6046 9 17.5 9C16.3954 9 15.5 9.89543 15.5 11C15.5 12.1046 16.3954 13 17.5 13ZM17.5 15C15.2909 15 13.5 13.2091 13.5 11C13.5 8.79086 15.2909 7 17.5 7C19.7091 7 21.5 8.79086 21.5 11C21.5 13.2091 19.7091 15 17.5 15ZM20 21V20.5C20 19.1193 18.8807 18 17.5 18C16.1193 18 15 19.1193 15 20.5V21H13V20.5C13 18.0147 15.0147 16 17.5 16C19.9853 16 22 18.0147 22 20.5V21H20ZM10 21V17C10 15.3431 8.65685 14 7 14C5.34315 14 4 15.3431 4 17V21H2V17C2 14.2386 4.23858 12 7 12C9.76142 12 12 14.2386 12 17V21H10Z"></path>
            </svg>
            <span className={styles.navLinks}>Parents</span>
          </Link>

          <div
            className={
              isOpen == true
                ? styles.sidebarNestedNavItemsContainerFocus
                : styles.sidebarNestedNavItemsContainer
            }
          >
            <div onClick={toggleCollapse} className={``}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.6367 1.6367C.7322 1.6367 0 2.369 0 3.2734v17.4532c0 .9045.7322 1.6367 1.6367 1.6367h20.7266c.9045 0 1.6367-.7322 1.6367-1.6367V3.2734c0-.9045-.7322-1.6367-1.6367-1.6367H1.6367zm.545 2.1817h19.6367v16.3632h-2.7266v-1.0898h-4.9102v1.0898h-12V3.8184zM12 8.1816c-.9046 0-1.6367.7322-1.6367 1.6368 0 .9045.7321 1.6367 1.6367 1.6367.9046 0 1.6367-.7322 1.6367-1.6367 0-.9046-.7321-1.6368-1.6367-1.6368zm-4.3633 1.9102c-.6773 0-1.2285.5493-1.2285 1.2266 0 .6772.5512 1.2265 1.2285 1.2265.6773 0 1.2266-.5493 1.2266-1.2265 0-.6773-.5493-1.2266-1.2266-1.2266zm8.7266 0c-.6773 0-1.2266.5493-1.2266 1.2266 0 .6772.5493 1.2265 1.2266 1.2265.6773 0 1.2285-.5493 1.2285-1.2265 0-.6773-.5512-1.2266-1.2285-1.2266zM12 12.5449c-1.179 0-2.4128.4012-3.1484 1.0059-.384-.1198-.8043-.1875-1.2149-.1875-1.3136 0-2.7285.695-2.7285 1.5586v.8965h14.1836v-.8965c0-.8637-1.4149-1.5586-2.7285-1.5586-.4106 0-.831.0677-1.2149.1875-.7356-.6047-1.9694-1.0059-3.1484-1.0059Z"></path>
              </svg>
              <div className="">
                {/* <span>{isOpen ? "▼" : "►"}</span> */}
                <span className={`${styles.navLinks}`}>Subjects</span>
              </div>
            </div>
            {isOpen && (
              <div className={`${styles.collpaseContentContainer}`}>
                <Link
                  to={"/subjects/subjectwidget"}
                  className={styles.collapseContent}
                >
                  Subject
                </Link>

                <Link
                  to={"/subjects/notewidget"}
                  className={styles.collapseContent}
                >
                  Note
                </Link>
              </div>
            )}
          </div>

          {/* <Link to={"/subjects"} className={styles.sidebabrNavItems}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"></path>
            </svg>
            <span className={styles.navLinks}>Subjects</span>
          </Link> */}

          <Link to={"/attendance"} className={styles.sidebabrNavItems}>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
              ></path>
            </svg>
            <span className={styles.navLinks}>Attendance</span>
          </Link>

          <Link to={"/assignments"} className={styles.sidebabrNavItems}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M7 15h7v2H7zm0-4h10v2H7zm0-4h10v2H7zm12-4h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.008 2.008 0 0 0-1.44 1.19c-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z"></path>
            </svg>
            <span className={styles.navLinks}>Assignments</span>
          </Link>

          <Link to={"/assignments"} className={styles.sidebabrNavItems}>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
            <span className={styles.navLinks}>Settings</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

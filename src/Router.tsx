import { Route, Routes, useLocation } from "react-router-dom";
import { routes } from "./config/routes";
import { Error } from "./Error";
import { Menu } from "./Menu";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { useEffect } from "react";

export const Router = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let scrollHash = false;
    try {
      if (hash) {
        const element = document?.querySelector(hash);
        if (element) {
          scrollHash = true;
          element?.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    } catch {
      scrollHash = false;
    }
    if (!scrollHash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <>
      <div className="core-body" style={{ display: "flex" }}>
        {/* App header */}
        <Header />

        {/* Left side menu */}
        <div
          style={{ minHeight: "calc(100vh - 5.5rem)", width: "20rem" }}
          className={`core-side`}
        >
          <Menu />
        </div>

        <div
          className="core-main"
          style={{
            minHeight: "calc(100vh - 5.5rem)",
            width: "calc(100vw - 20rem)",
          }}
        >
          <div className="main-area">
            <div>
              <Routes>
                {routes.map((route) => (
                  <Route key={`nav_page_${route.path}`} {...route} />
                ))}
                <Route key="nav_page_other" path="*" element={<Error />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>

      {/* App footer */}
      <Footer />
    </>
  );
};

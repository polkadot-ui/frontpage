import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="app-footer">
      <section>
        <div>
          <div className="alpha">Alpha</div>
        </div>
        <div>
          <h4>
            &copy; Copyright {new Date().getUTCFullYear()} &nbsp;
            <span>Polkadot UI Authors & Contributors.</span>
          </h4>
        </div>{" "}
        <div>
          <h4 className="license">
            Licensed with{" "}
            <a
              href="https://spdx.org/licenses/MIT.html"
              target="_blank"
              rel="noreferrer"
            >
              MIT
            </a>
          </h4>
        </div>
      </section>
      <section>
        <h4>
          <a
            href="https://github.com/polkadot-ui/library"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
            &nbsp; GitHub
          </a>
        </h4>
      </section>
    </div>
  );
};

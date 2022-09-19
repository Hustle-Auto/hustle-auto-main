import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

const NavbarLink = (props) => {
  const router = useRouter();

  const isActiveLink = router.pathname === props.href;

  const onClickHandler = (e) => {
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <Link href={props.href}>
      <a>
        <div
          className={classnames([props.className], {
            [props.activeLinkClassName]: isActiveLink,
          })}
          onClick={onClickHandler}
        >
          {props.children}
        </div>
      </a>
    </Link>
  );
};

export default NavbarLink;

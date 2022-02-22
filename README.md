# NextJs start

-   router 를 따로 설정할 필요 없이 pages 폴더 내에서 파일명으로 자동으로 routing 됨

-   client side render : normal React
    JS 가 다 열린 후에야 화면을 제대로 볼 수 있음
    JS 코드를 통해서 DOM 을 render 하기 때문

-   server side render : NextJS
    스크립트가 로드 되기 전에 컴포넌츠 초기값을 미리 rendering 하여 보여줌
    (pre-rendering)
    다 load 된 후에는 ReactJS 를 중심으로 작동함

https://nomadcoders.co/nextjs-fundamentals/lectures/3440

-   Navigation

<nav>
    <Link href="/">
        <a>Home</a>
    </Link>
    <Link href="/about">
        <a>About</a>
    </Link>
</nav>
: react-router-dom 과 달리 a 태그를 넣어줘야함

-   useRouter 를 이용해 router path 속성을 이용할 수 있음

import { useRouter } from "next/router";
const router = useRouter();

<Link href="/">
    <a style={{ color: router.pathname === "/" ? "red" : "blue" }}>
        Home
    </a>
</Link>
<Link href="/about">
    <a
        style={{
            color: router.pathname === "/about" ? "red" : "blue",
        }}
    >
        About
    </a>
    
- style module 을 이용해 css 작업 가능
import styles from "./NavBar.module.css";

<nav className={styles.nav}>

<a
className={[
router.pathname === "/" ? styles.active : "",
].join(" ")} >
Home
</a>

</Link>
<Link href="/about">
<a
className={[
router.pathname === "/about" ? styles.active : "",
].join(" ")} >
About
</a>

className (class 라고 쓰면 안됨 react class 랑 혼동을 줄 수 있기 때문)
은 literal 만 가능하기 때문에 변환해주는 작업을 거쳐야하고
모듈 파일도 새로 만들어야하고 class 이름도 기억해야함
구현은 가능하지만 선호하진 않음

<Link href="/about">
    <a className={router.pathname === "/about" ? "active" : ""}>
        About
    </a>
</Link>
<style jsx>{`
    nav {
        background-color: tomato;
    }
    a {
        text-decoration: none;
    }
    .active {
        color: yellow;
    }
`}</style>

이런식으로 jsx 내에서 style로 구현하는 것이 편할 수 있음
각각의 파일마다 style은 독립적으로 동작함, 연결되지 않음
(라우터마다 해당 클래스 이름이 랜덤하게 만들어지기 때문)

전체 페이지에서 적용되는 global style 을 만들기 위해서는 ?

<style jsx global>
    {`
        a {
            color: white;
        }
    `}
</style>

global prop 을 이용하여
이렇게 할 수 있지만 해당 페이지에서만 적용됨

-   App component

-   \_app.tsx 파일을 만들어 블루프린트로 활용 (Custom App component)

import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function App({ Component, pageProps }: IApp) {
return (
<>
<NavBar />
<Component {...pageProps} />
</>
);
}

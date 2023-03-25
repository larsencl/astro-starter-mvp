/**
 * @usage
 * import { nav } from "@data/nav"
 * {
    nav.map((item) => (
       <a href={item.slug}>{item.name}</a>
    ))
    }
 */

export const nav = [
    {
        name: "Home",
        slug: "/",
    },
    {
        name: "About",
        slug: "/about",
    },
]

'use client'

import {
  BriefcaseBusiness,
  Building2,
  Car,
  Fish,
  Heart,
  CirclePlus,
  CircleUserRound,
  Newspaper,
  Search,
  Settings,
  Shirt,
  Wrench,
  Smartphone,
  Sofa,
  Palmtree,
  Bike,
  Baby,
  Utensils,
  BookOpen,
  Dumbbell,
} from "lucide-react"

import Link from "next/link"
import { usePathname } from "next/navigation"

const categories = [
  { slug: "immobiliers", label: "Immobilier",  icon: <Building2 size={17} />     },
  { slug: "cars",        label: "Véhicules",   icon: <Car size={17} />           },
  { slug: "motos",       label: "Motos",       icon: <Bike size={17} />          },
  { slug: "hightech",    label: "High-Tech",   icon: <Smartphone size={17} />    },
  { slug: "cloths",      label: "Mode",        icon: <Shirt size={17} />         },
  { slug: "maison",      label: "Maison",      icon: <Sofa size={17} />          },
  { slug: "bebe",        label: "Bébé",        icon: <Baby size={17} />          },
  { slug: "emplois",     label: "Emploi",      icon: <BriefcaseBusiness size={17} /> },
  { slug: "services",    label: "Services",    icon: <Wrench size={17} />        },
  { slug: "restauration",label: "Resto & Food",icon: <Utensils size={17} />     },
  { slug: "peche",       label: "Pêche",       icon: <Fish size={17} />          },
  { slug: "vacances",    label: "Vacances",    icon: <Palmtree size={17} />      },
  { slug: "education",   label: "Éducation",   icon: <BookOpen size={17} />      },
  { slug: "sport",       label: "Sport",       icon: <Dumbbell size={17} />      },
]

const NAV_BG  = "#1b3226"
const ACCENT  = "#D4E84A"
const BORDER  = "rgba(255,255,255,0.08)"
const MAX_W   = "1280px"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav style={{ fontFamily: "'DM Sans', sans-serif", background: NAV_BG }}>

 
      <div style={{ borderBottom: `1px solid ${BORDER}` }}>
        <div
          className="flex items-center gap-3 px-6 py-2.5 mx-auto w-full"
          style={{ maxWidth: MAX_W }}
        >
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 mr-1">
            <span
              className="text-xl font-extrabold text-white"
              style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.5px" }}
            >
              kisiwa<span style={{ color: ACCENT }}>.</span>
            </span>
          </Link>

          {/* Barre de recherche */}
          <div
            className="flex flex-1 overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.07)",
            
              
            }}
          >
            <input
              type="text"
              placeholder="Rechercher une annonce..."
              className="flex-1 bg-transparent px-4 py-2 text-sm text-white outline-none placeholder:text-white/30 min-w-0"
            />
            <button
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold flex-shrink-0"
              style={{
                background: ACCENT,
                color: NAV_BG,
                fontFamily: "'Syne', sans-serif",
              }}
            >
              <Search size={13} />
              Chercher
            </button>
          </div>

          {/* Bouton Déposer */}
          <Link href="/add" className="flex-shrink-0">
            <button
              className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold whitespace-nowrap"
              style={{
                background: ACCENT,
                color: NAV_BG,
               
                fontFamily: "'Syne', sans-serif",
              }}
            >
              <CirclePlus size={14} />
              Déposer
            </button>
          </Link>

          {/* Icônes */}
          <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
            {[
              { href: "/favorites", icon: <Heart size={17} />,           label: "Favoris"  },
              { href: "/settings",  icon: <Settings size={17} />,        label: "Réglages" },
              { href: "/annonces",  icon: <Newspaper size={17} />,       label: "Annonces" },
              { href: "/account",   icon: <CircleUserRound size={17} />, label: "Compte"   },
            ].map(({ href, icon, label }) => (
              <Link
                key={href}
                href={href}
                className="flex flex-col items-center gap-0.5 transition-colors"
                style={{ color: "rgba(255,255,255,0.45)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              >
                {icon}
                <span className="text-[10px]">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

 
      <div className="overflow-x-auto" style={{ borderBottom: `1px solid ${BORDER}` }}>
        <ul
          className="flex mx-auto px-6 w-full"
          style={{
            maxWidth: MAX_W,
            /* Répartition uniforme sur toute la largeur */
            justifyContent: "space-between",
          }}
        >
          {categories.map((cat) => {
            const isActive = pathname === `/lists/${cat.slug}`
            return (
              <li key={cat.slug} className="flex-shrink-0">
                <Link
                  href={`/lists/${cat.slug}`}
                  className="flex flex-col items-center gap-1 px-3 py-3 text-[10.5px] border-b-2 transition-colors duration-150 whitespace-nowrap"
                  style={{
                    color: isActive ? ACCENT : "rgba(255,255,255,0.45)",
                    borderBottomColor: isActive ? ACCENT : "transparent",
                    fontWeight: isActive ? 500 : 400,
                  }}
                  onMouseEnter={e => {
                    if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.9)"
                  }}
                  onMouseLeave={e => {
                    if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.45)"
                  }}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
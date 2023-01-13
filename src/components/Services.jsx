import React from "react";
import { servicesTitleArray } from "./news";
import Link from "./Link";
import SectionItem from "./SectionItem";

export default function Services() {
  return (
    <section className="services__section">
      <SectionItem items={servicesTitleArray}>
        {(items) =>
          items.map((item) => (
              <Link className="services-item-title__section" href="/">
                {item}
              </Link>
          ))
        }
      </SectionItem>
      
    </section>
  );
}

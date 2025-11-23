"use client";
import React, { useState } from "react";
import styles from "./know-us.module.css";
import KnowUsModal from "../../ui/model/KnowUsPopupModel";

const DATA = [
  {
    id: 1,
    title: "WHAT WE DO?",
    description: "WE MAKE STUFF YOU CAN LICK, BITE, SUCK AND EAT FOR FUN. IN CONES, BARS, CUPS AND CANDIES. ALL IN FLAVOURS THAT SLAP. HARD.",
  },
  { id: 2, title: "WHO WE ARE?", description: "We are a bunch of flavor fanatics obsessed with bringing the fun back to ice cream." },
  { id: 3, title: "WHAT WE BELIEVE?", description: "We believe life is too short for boring vanilla. Every bite should be an adventure." },
  { id: 4, title: "WHO WE'RE FOR?", description: "For the bold, the loud, and anyone who isn't afraid of a brain freeze." },
  { id: 5, title: "WHERE WE'RE FROM?", description: "Born in the heat, raised on the streets of Ahmedabad. Local roots, global taste." },
  { id: 6, title: "WHAT WE'RE BUILDING?", description: "A flavor empire that refuses to apologize for being delicious." },
  { id: 7, title: "WHAT MAKES US BANGER?", description: "It's not just the ingredients. It's the attitude. Pure, unadulterated Banger energy." },
];

export default function KnowUs() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Floating Badge */}
        <div className={styles.badge}>KNOW US</div>

        <div className={styles.grid}>
          {DATA.map((item) => (
            <div
              key={item.id}
              className={`${styles.card}`}
              onClick={() => handleItemClick(item)}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>

      {/* Modal Component */}
      <KnowUsModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        data={selectedItem} 
      />
    </section>
  );
}
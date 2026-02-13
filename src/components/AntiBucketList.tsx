import React from "react";
import { motion } from "framer-motion";

interface AntiBucketListProps {
  weeksLeft: number;
}

export const AntiBucketList: React.FC<AntiBucketListProps> = ({
  weeksLeft,
}) => {
  // Rough calculations
  const yearsLeft = Math.floor(weeksLeft / 52);
  const saturdaysLeft = weeksLeft;
  // Assuming 1 summer per year
  const summersLeft = yearsLeft;
  // Assuming 1 winter per year
  const wintersLeft = yearsLeft;

  const items = [
    { label: "Summers Left", value: summersLeft },
    { label: "Saturdays Left", value: saturdaysLeft.toLocaleString() },
    { label: "Winters Left", value: wintersLeft },
  ];

  return (
    <div className="w-full max-w-4xl mt-12 mb-8 px-4">
      <h3 className="text-xl font-serif font-bold text-center mb-6 opacity-80">
        The Anti-Bucket List
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {items.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-4 border border-[#1A1A1A] border-opacity-10 bg-[#F5F5F0]"
          >
            <div className="text-3xl font-bold font-serif mb-2 text-[#D32F2F]">
              {item.value}
            </div>
            <div className="text-sm font-mono uppercase tracking-widest opacity-60">
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

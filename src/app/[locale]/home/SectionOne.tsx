"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { features } from "@/Data/HomeData/HomeData";
import { Card } from "antd";
import { motion } from "framer-motion";

interface FeatureItemProps {
  Icon: React.ElementType;
  titleKey: string;
  descriptionKey: string;
  index: number;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  Icon,
  titleKey,
  descriptionKey,
  index,
}) => {
  const t = useTranslations();

  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <motion.div
        className="bg-primary rounded-full p-4 mb-4 ring-8 ring-primary/25"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Icon className="w-5 h-5 text-white" />
      </motion.div>
      <motion.h3
        className="text-lg font-semibold mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
      >
        {t(titleKey)}
      </motion.h3>
      <motion.p
        className="text-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
      >
        {t(descriptionKey)}
      </motion.p>
    </motion.div>
  );
};

const SectionOne: React.FC = () => (
  <motion.div
    className="container mx-auto py-12"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="border shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map(({ icon: Icon, titleKey, descriptionKey }, index) => (
          <FeatureItem
            key={index}
            Icon={Icon}
            titleKey={titleKey}
            descriptionKey={descriptionKey}
            index={index}
          />
        ))}
      </div>
    </Card>
  </motion.div>
);

export default SectionOne;

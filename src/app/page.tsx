"use client";

import { useState } from "react";
import Image from "next/image";
import { CompassIcon, Users02Icon, Award01Icon } from "./styles/icons";
import spaceData from "../../public/data/space.json";
import {
  PageLayout,
  Nav,
  Label,
  SpaceLayout,
  SpaceTitle,
  CardsList,
  DataCard,
  ImageHeader,
  ImageCard,
  DetailsCard,
  Modal,
} from "./components";
import { File06Icon } from "./styles/icons/File06Icon";
import { ReceiptIcon } from "./styles/icons/ReceiptIcon";
import ContentGrid from "./components/ContentGrid";
import { ActiveShapePieChart, SimplePieChart } from "./components/Charts";

export default function Home() {
  const { empreendimento } = spaceData;
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const chartData = [
    {
      name: "Disponíveis",
      value: empreendimento.estatisticas_gerais.unidades.disponiveis,
      color: "#F8F4F2",
    },
    {
      name: "Reservados",
      value: empreendimento.estatisticas_gerais.unidades.reservados,
      color: "#C30010",
    },
    {
      name: "Vendidos",
      value: empreendimento.estatisticas_gerais.unidades.vendidos,
      color: "#9C000D",
    },
  ];

  return (
    <PageLayout>
      <Nav title={empreendimento.nome} />
      <Label text={empreendimento.andamento_obra.status} color="yellow">
        <CompassIcon />
      </Label>
      <ImageHeader
        src={empreendimento.imagem_principal}
        alt={empreendimento.nome}
      />
      <SpaceLayout >
        <SpaceTitle
          title={empreendimento.nome}
          address={empreendimento.endereco}
          date={empreendimento.data_entrega_prevista}
        />
        <CardsList>
          <DataCard
            title="Compradores"
            value={empreendimento.estatisticas_gerais.compradores}
            icon={<Users02Icon />}
          />
          <DataCard
            title="Eventos"
            value={empreendimento.estatisticas_gerais.eventos}
            icon={<Award01Icon />}
          />
          <DataCard
            title="Documentos"
            value={empreendimento.estatisticas_gerais.documentos}
            icon={<File06Icon />}
          />
          <DataCard
            title="Conexões"
            value={empreendimento.estatisticas_gerais.conexoes}
            icon={<ReceiptIcon />}
          />
        </CardsList>

        <div className="flex flex-col md:flex-row gap-2">
          <div className="w-full my-3 p-4 sm:p-6 bg-white dark:bg-slate-800 rounded-lg border border-gray-300 dark:border-slate-700 shadow-sm transition-colors">
            <ActiveShapePieChart
              data={chartData}
              height={150}
              innerRadius={50}
              outerRadius={70}
              total={empreendimento.estatisticas_gerais.unidades.total}
            />
          </div>
          <div className="flex items-center justify-center w-full my-3 p-4 sm:p-6 bg-white dark:bg-slate-800 rounded-lg border border-gray-300 dark:border-slate-700 shadow-sm transition-colors">
            <SimplePieChart
              value={empreendimento.estatisticas_gerais.unidades.vendidos}
              total={empreendimento.estatisticas_gerais.unidades.total}
              label="Total Vendido"
              height={150}
              innerRadius={50}
              outerRadius={70}
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <ContentGrid title="Imagens">
            {empreendimento.arquivos_empreendimento.map((arquivo) => (
              <ImageCard
                size="default"
                key={arquivo.id}
                src={arquivo.url}
                alt={arquivo.nome}
                onClick={() => setSelectedImage({ src: arquivo.url, alt: arquivo.nome })}
              />
            ))}
          </ContentGrid>
          <ContentGrid title="Andamento da obra">
            <DetailsCard finished={empreendimento.finished}>
              {empreendimento.arquivos_obra.map((arquivo) => (
                <ImageCard
                  size="small"
                  key={arquivo.id}
                  src={arquivo.url}
                  alt={arquivo.nome}
                  onClick={() => setSelectedImage({ src: arquivo.url, alt: arquivo.nome })}
                />
              ))}
            </DetailsCard>
          </ContentGrid>
        </div>
      </SpaceLayout>

      <Modal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        size="xl"
        hideHeader
        noPadding
      >
        {selectedImage && (
          <div className="relative w-full flex items-center justify-center p-2 sm:p-4">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="max-w-full max-h-[75vh] sm:max-h-[85vh] w-auto h-auto object-contain rounded-lg"
              priority
            />
          </div>
        )}
      </Modal>
    </PageLayout>
  );
}

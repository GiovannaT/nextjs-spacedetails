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
} from "./components";
import { File06Icon } from "./styles/icons/File06Icon";
import { ReceiptIcon } from "./styles/icons/ReceiptIcon";
import ContentGrid from "./components/ContentGrid";
import { ActiveShapePieChart } from "./components/Charts";

export default function Home() {
  const { empreendimento } = spaceData;

  const chartData = [
    {
      name: "Vendidos",
      value: empreendimento.estatisticas_gerais.unidades.vendidos,
      color: "#9C000D",
    },
    {
      name: "Reservados",
      value: empreendimento.estatisticas_gerais.unidades.reservados,
      color: "#C30010",
    },
    {
      name: "Disponíveis",
      value: empreendimento.estatisticas_gerais.unidades.disponiveis,
      color: "#F8F4F2",
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
      <SpaceLayout>
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

        <div className="w-full my-8 p-6 bg-white rounded-lg border border-gray-300 shadow-sm">
          <h2 className="text-lg font-semibold text-[var(--color-gray-900)] mb-6">
            Distribuição de Unidades
          </h2>
          <ActiveShapePieChart
            data={chartData}
            height={400}
            innerRadius={80}
            outerRadius={120}
          />
        </div>

        <ContentGrid title="Imagens">
          {empreendimento.arquivos_empreendimento.map((arquivo) => (
            <ImageCard
              size="default"
              key={arquivo.id}
              src={arquivo.url}
              alt={arquivo.nome}
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
              />
            ))}
          </DetailsCard>
        </ContentGrid>
      </SpaceLayout>
    </PageLayout>
  );
}

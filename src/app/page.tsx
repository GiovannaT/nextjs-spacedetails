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
export default function Home() {
  const { empreendimento } = spaceData;

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
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
        </div>
      </SpaceLayout>
    </PageLayout>
  );
}

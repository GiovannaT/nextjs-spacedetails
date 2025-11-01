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
} from "./components";
import { File06Icon } from "./styles/icons/File06Icon";
import { ReceiptIcon } from "./styles/icons/ReceiptIcon";
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
      </SpaceLayout>
    </PageLayout>
  );
}

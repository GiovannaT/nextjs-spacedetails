interface DetailsCardProps {
  finished: boolean;
  children: React.ReactNode;
}

export default function DetailsCard({ finished, children }: DetailsCardProps) {
  return (
    <div className="flex flex-col gap-2 border border-gray-300 rounded-lg p-4 sm:p-6 md:p-10 flex-1 w-full">
      <p className="text-xs sm:text-sm font-bold text-[var(--color-gray-900)]">
        {finished ? "Concluído" : "Entrega Prevista"}
      </p>
      <h3 className="text-2xl sm:text-3xl font-medium text-[var(--color-gray-900)]">
        {finished ? "Em vendas" : "Em construção"}
      </h3>
      <hr className="border-gray-300 my-3 sm:my-5" />
      <div className="flex flex-row gap-2 sm:gap-3 overflow-x-scroll" >
        {children}
      </div>
    </div>
  );
}

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function OrderDetail() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido 98475fn53v5791</DialogTitle>
        <DialogDescription>Detalhes do Pedido</DialogDescription>
      </DialogHeader>
      <div className="space-y-6">
        <Table>
          <TableRow>
            <TableCell className="text-muted-foreground">Status</TableCell>
            <TableCell className="flex justify-end">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-slate-400" />
                <span className="font-medium text-muted-foreground">
                  Pendente
                </span>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">Cliente</TableCell>
            <TableCell className="flex justify-end">
              Fabricio Rodrigues Zillig
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">Telefone</TableCell>
            <TableCell className="flex justify-end">(11) 99999-9999</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">Realizado</TableCell>
            <TableCell className="flex justify-end">Há 3 minutos</TableCell>
          </TableRow>
        </Table>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Qtd.</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Pizza Pepperoni Família</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$ 69,90</TableCell>
              <TableCell className="text-right">R$ 139,80</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pizza Calamussa</TableCell>
              <TableCell className="text-right">1</TableCell>
              <TableCell className="text-right">R$ 59,90</TableCell>
              <TableCell className="text-right">R$ 59,90</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do Pedido</TableCell>
              <TableCell className="text-right">R$ 199,70</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}

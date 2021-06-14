import {Card, CardHeader, CardContent} from '@material-ui/core';
import { Revenue } from './dashboardComponents/revenue'
export const dashboard = () => (
  <Revenue />
  <Card>
    <CardHeader title="Welcome to the administration" />
    <CardContent>Text</CardContent>
  </Card>
);
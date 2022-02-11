import { Card, CardContent, Button, CardActions } from "@mui/material";

const CardItem = ({ item, clickHandler, deleteHandler }) => {
  const { id, url, title, thumbnailUrl } = item;

  return (
    <Card sx={{ maxWidth: 200, maxHeight: 230, justifySelf: "center" }}>
      <CardContent sx={{ display: "flex", justifyContent: "center" }}>
        <img src={thumbnailUrl} alt={title} onClick={() => clickHandler(url)} />
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => deleteHandler(id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardItem;

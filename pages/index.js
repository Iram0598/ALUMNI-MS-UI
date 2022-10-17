import { Button, Card, Input, Link, Text } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      <title>IUBAT-ACMS</title>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          marginTop: "300px",
        }}
      >
        <Card
          style={{height: "700px"}}
          width="50px"
          isHoverable
          variant="bordered"
          alignContent="center"
          css={{ mw: "400px", mh: "400px" }}
        >
          <Card.Body>
            <p style={{textAlign: "center", fontSize: "20px"}}>
              <b>Login</b>
            </p>
            <Text>ID</Text>
            <Input></Input>
            <Text>Password</Text>
            <Input.Password></Input.Password>
            <Button css={{mt: "40px"}}>Login</Button>
            <Link css={{mt: "10px"}} >Register</Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

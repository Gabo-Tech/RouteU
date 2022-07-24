import React, { useState } from "react";
import { Button, Modal } from "antd";

const Modale = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="button-antd secondary" onClick={showModal}>
        Terminos y condiciones
      </Button>
      <Modal
        title="Terminos y Condiciones"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          Términos y condiciones ¡Bienvenido a RouteU.com! Estos términos y
          condiciones describen las reglas y regulaciones para el uso del sitio
          web de RouteU, ubicado en https://www.routeu.com. Al acceder a este
          sitio web, asumimos que acepta estos términos y condiciones. No
          continúe usando RouteU.com si no está de acuerdo con todos los
          términos y condiciones establecidos en esta página. Galletas: El sitio
          web utiliza cookies para ayudar a personalizar su experiencia en
          línea. Al acceder a RouteU.com, usted aceptó utilizar las cookies
          requeridas. Una cookie es un archivo de texto que un servidor de
          páginas web coloca en su disco duro. Las cookies no se pueden utilizar
          para ejecutar programas o enviar virus a su computadora. Las cookies
          se le asignan de manera única y solo puede leerlas un servidor web en
          el dominio que le emitió la cookie. Podemos usar cookies para
          recopilar, almacenar y rastrear información con fines estadísticos o
          de marketing para operar nuestro sitio web. Tiene la capacidad de
          aceptar o rechazar cookies opcionales. Hay algunas cookies requeridas
          que son necesarias para el funcionamiento de nuestro sitio web. Estas
          cookies no requieren su consentimiento ya que siempre funcionan. Tenga
          en cuenta que al aceptar las Cookies requeridas, también acepta las
          Cookies de terceros, que pueden usarse a través de servicios
          proporcionados por terceros si utiliza dichos servicios en nuestro
          sitio web, por ejemplo, una ventana de visualización de video
          proporcionada por terceros e integrada. en nuestro sitio web.
          Licencia: A menos que se indique lo contrario, RouteU y/o sus
          licenciantes poseen los derechos de propiedad intelectual de todo el
          material en RouteU.com. Todos los derechos de propiedad intelectual
          están reservados. Puede acceder a esto desde RouteU.com para su uso
          personal sujeto a las restricciones establecidas en estos términos y
          condiciones. RouteU se reserva el derecho de monitorear todos los
          Comentarios y eliminar cualquier Comentario que pueda considerarse
          inapropiado, ofensivo o que cause el incumplimiento de estos Términos
          y Condiciones.
        </p>
      </Modal>
    </>
  );
};

export default Modale;

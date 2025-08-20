import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Gestión Eficiente de Citas',
    icon: '📅',
    description: (
      <>
        Programa, modifica y gestiona citas médicas de manera intuitiva.
        Reduce tiempos de espera y optimiza el uso de recursos médicos.
      </>
    ),
  },
  {
    title: 'Configuración de Equipos',
    icon: '🏥',
    description: (
      <>
        Administra equipos médicos, programa mantenimientos y controla
        la disponibilidad de recursos en tiempo real.
      </>
    ),
  },
  {
    title: 'Integración Completa',
    icon: '🔗',
    description: (
      <>
        Conecta con sistemas de seguros, facturación y historiales médicos
        para una experiencia unificada y eficiente.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureIcon} role="img">
          {icon}
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

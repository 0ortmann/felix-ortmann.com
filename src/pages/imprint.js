import React from "react"
import { Link } from "gatsby"

import Page from "../components/page"
import TextContent from "../components/textContent"
import SEO from "../components/seo"

const ImprintPage = () => (
  <Page>
    <SEO title="Impressum" />
    <TextContent>
    <h1>Impressum</h1>
    <h3>Angaben gemäß § 5 TMG</h3>
    <section>
      <p>
        Felix Christian Ortmann
        <br />
        Agathenstr. 7<br />
        20357 Hamburg
        <br />
        Germany
        <br />
        +49 174 83 73 193
        <br />
        <a href="mailto:felix.ortmann@gmail.com">flx.ortmann@gmail.com</a>
      </p>
    </section>

    <section>
      <h3>Haftung für Inhalte</h3>
      <p>
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
        Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
        jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
        Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
        Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
        Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
        gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
        forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
        Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
        entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
        entfernen.
      </p>
    </section>
    <section>
      <h3>Haftung für Links</h3>
      <p>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
        Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
        waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
        inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
        von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </p>
    </section>
    <section>
      <h3>Urheberrecht</h3>
      <p>
        Die durch die Seitenbetreiber erstellten bzw. verwendeten Inhalte und
        Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die
        Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
        außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
        Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien
        dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
        gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber
        erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
        werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem
        auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
        wir derartige Inhalte umgehend entfernen.
      </p>
    </section>
    <Link to="/">Home</Link>
    </TextContent>
  </Page>
)

export default ImprintPage

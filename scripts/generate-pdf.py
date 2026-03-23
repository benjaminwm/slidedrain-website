#!/usr/bin/env python3
"""Generate Slidedrain professional project brochure PDF."""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm, cm
from reportlab.lib.colors import HexColor, white, Color
from reportlab.pdfgen import canvas
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from reportlab.platypus import Paragraph, Frame, Table, TableStyle
from reportlab.lib.styles import ParagraphStyle

# Brand colors
ORANGE = HexColor("#fb5c13")
ORANGE_DARK = HexColor("#e04e0e")
NAVY = HexColor("#283447")
NAVY_LIGHT = HexColor("#344563")
TEXT_LIGHT = HexColor("#5a6a80")
GRAY_BG = HexColor("#f6f6f6")
LIGHT_ORANGE_BG = HexColor("#fef7f3")
GREEN = HexColor("#22c55e")
RED = HexColor("#ef4444")
WHITE = white

W, H = A4  # 210mm x 297mm

OUTPUT = "/Users/benjaminmortensen/slidedrain-website/public/downloads/slidedrain-prosjektmappe.pdf"


def draw_orange_bar(c, y, height=4*mm):
    """Draw orange accent bar across the top."""
    c.setFillColor(ORANGE)
    c.rect(0, y, W, height, fill=1, stroke=0)


def draw_footer(c, page_num, total=6):
    """Draw page footer."""
    c.setFont("Helvetica", 7)
    c.setFillColor(TEXT_LIGHT)
    c.drawString(30*mm, 12*mm, "Slidedrain Sluksystem  |  slidedrain.no  |  post@slidedrain.no")
    c.drawRightString(W - 30*mm, 12*mm, f"Side {page_num} av {total}")
    # Thin line
    c.setStrokeColor(HexColor("#e0e0e0"))
    c.setLineWidth(0.5)
    c.line(30*mm, 17*mm, W - 30*mm, 17*mm)


def draw_icon_circle(c, x, y, radius, icon_text, bg_color=LIGHT_ORANGE_BG, icon_color=ORANGE):
    """Draw a circle with an icon character."""
    c.setFillColor(bg_color)
    c.circle(x, y, radius, fill=1, stroke=0)
    c.setFillColor(icon_color)
    c.setFont("Helvetica-Bold", 14)
    c.drawCentredString(x, y - 5, icon_text)


def draw_rounded_rect(c, x, y, w, h, r, fill_color=None, stroke_color=None):
    """Draw a rounded rectangle."""
    p = c.beginPath()
    p.roundRect(x, y, w, h, r)
    if fill_color:
        c.setFillColor(fill_color)
    if stroke_color:
        c.setStrokeColor(stroke_color)
        c.setLineWidth(0.5)
    c.drawPath(p, fill=1 if fill_color else 0, stroke=1 if stroke_color else 0)


def wrap_text(c, text, x, y, max_width, font="Helvetica", size=10, color=NAVY, leading=14):
    """Draw wrapped text and return the new y position."""
    style = ParagraphStyle(
        'custom',
        fontName=font,
        fontSize=size,
        textColor=color,
        leading=leading,
        alignment=TA_LEFT,
    )
    p = Paragraph(text, style)
    pw, ph = p.wrap(max_width, 1000)
    p.drawOn(c, x, y - ph)
    return y - ph


# ============================================================
# PAGE 1: COVER
# ============================================================
def page_cover(c):
    # Full navy background
    c.setFillColor(NAVY)
    c.rect(0, 0, W, H, fill=1, stroke=0)

    # Orange accent bar at top
    c.setFillColor(ORANGE)
    c.rect(0, H - 6*mm, W, 6*mm, fill=1, stroke=0)

    # Subtle geometric accent (large orange circle, partially visible)
    c.setFillColor(HexColor("#2e3d54"))
    c.circle(W + 30*mm, H/2 - 20*mm, 180*mm, fill=1, stroke=0)

    # Brand name
    c.setFillColor(ORANGE)
    c.setFont("Helvetica-Bold", 28)
    c.drawString(35*mm, H - 55*mm, "SLIDEDRAIN")

    # Thin orange line
    c.setStrokeColor(ORANGE)
    c.setLineWidth(2)
    c.line(35*mm, H - 62*mm, 105*mm, H - 62*mm)

    # "SLUKSYSTEM" subtitle
    c.setFillColor(HexColor("#8899aa"))
    c.setFont("Helvetica", 12)
    c.drawString(35*mm, H - 75*mm, "SLUKSYSTEM")

    # Main title
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 32)

    title_style = ParagraphStyle(
        'title',
        fontName='Helvetica-Bold',
        fontSize=32,
        textColor=WHITE,
        leading=40,
    )
    title = Paragraph("Den nye standarden<br/>for baderomsprosjekter", title_style)
    tw, th = title.wrap(140*mm, 200*mm)
    title.drawOn(c, 35*mm, H/2 + 10*mm)

    # Subtitle
    sub_style = ParagraphStyle(
        'sub',
        fontName='Helvetica',
        fontSize=15,
        textColor=HexColor("#8899aa"),
        leading=22,
    )
    sub = Paragraph(
        "Maksimal lønnsomhet gjennom<br/>teknisk standardisering",
        sub_style
    )
    sw, sh = sub.wrap(140*mm, 100*mm)
    sub.drawOn(c, 35*mm, H/2 - 25*mm)

    # Bottom section - document type
    c.setFillColor(HexColor("#8899aa"))
    c.setFont("Helvetica", 9)
    c.drawString(35*mm, 35*mm, "PROSJEKTMAPPE FOR BYGGHERRER OG ENTREPRENØRER")

    # Orange bottom accent
    c.setFillColor(ORANGE)
    c.rect(0, 0, W, 3*mm, fill=1, stroke=0)


# ============================================================
# PAGE 2: STRATEGIC BENEFITS
# ============================================================
def page_benefits(c):
    c.setFillColor(WHITE)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    draw_orange_bar(c, H - 4*mm)

    margin = 30*mm
    content_w = W - 2 * margin

    # Section tag
    c.setFillColor(ORANGE)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(margin, H - 28*mm, "STRATEGISK PROSJEKTSTYRING")

    # Title
    title_style = ParagraphStyle('t', fontName='Helvetica-Bold', fontSize=22, textColor=NAVY, leading=28)
    t = Paragraph("Fordelene ved å standardisere<br/>hjørneplassering", title_style)
    tw, th = t.wrap(content_w, 100*mm)
    t.drawOn(c, margin, H - 32*mm - th)

    y = H - 75*mm

    benefits = [
        ("1", "Forutsigbar fremdrift og teknisk trygghet",
         "Ved å plassere gulvsluket i hjørnet for samtlige bad, blir utførelsen for utsparing, rørføring og membrantetning helt identisk for hvert eneste bad i hele prosjektet. Dette eliminerer spesialløsninger, sikrer planlagt fremdrift og at de tekniske tetningene standardiseres."),
        ("2", "Full kostnadskontroll og økt margin",
         "Hver gang en kunde endrer fra punktsluk til linjesluk i et tradisjonelt prosjekt, medfører det økte kostnader i form av omprosjektering, pigging eller andre uventede endringer. Slidedrain Sluksystem fjerner disse endringskostnadene helt. Fleksibiliteten gjør at salgsprisen på tilvalget går uavkortet til bunnlinjen."),
        ("3", "Maksimert mersalg med utvidet tilvalgsvindu",
         "Muligheten for tilvalg forlenges helt frem til tynnavretting, langt senere i byggeprosessen enn det som er mulig i dag. Dette gir økt lønnsomhet per enhet og åpner for attraktive oppgraderinger også for kjøpere som kommer sent inn i prosessen."),
    ]

    for num, title, desc in benefits:
        # Number circle
        c.setFillColor(LIGHT_ORANGE_BG)
        c.circle(margin + 12*mm, y - 2*mm, 12*mm, fill=1, stroke=0)
        c.setFillColor(ORANGE)
        c.setFont("Helvetica-Bold", 18)
        c.drawCentredString(margin + 12*mm, y - 7*mm, num)

        # Title
        c.setFillColor(NAVY)
        c.setFont("Helvetica-Bold", 13)
        c.drawString(margin + 28*mm, y, title)

        # Description
        desc_style = ParagraphStyle('d', fontName='Helvetica', fontSize=10, textColor=TEXT_LIGHT, leading=15, alignment=TA_JUSTIFY)
        p = Paragraph(desc, desc_style)
        pw, ph = p.wrap(content_w - 28*mm, 100*mm)
        p.drawOn(c, margin + 28*mm, y - 8*mm - ph)

        y -= ph + 30*mm

    # Bottom accent line
    c.setStrokeColor(ORANGE)
    c.setLineWidth(1)
    c.line(margin, 25*mm, margin + 30*mm, 25*mm)

    draw_footer(c, 2)


# ============================================================
# PAGE 3: THREE OPTION LEVELS
# ============================================================
def page_tilvalg(c):
    c.setFillColor(WHITE)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    draw_orange_bar(c, H - 4*mm)

    margin = 30*mm
    content_w = W - 2 * margin

    # Tag
    c.setFillColor(ORANGE)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(margin, H - 28*mm, "TILVALGSKONSEPT")

    # Title
    title_style = ParagraphStyle('t', fontName='Helvetica-Bold', fontSize=22, textColor=NAVY, leading=28)
    t = Paragraph("Tre fleksible tilvalgsnivåer", title_style)
    tw, th = t.wrap(content_w, 50*mm)
    t.drawOn(c, margin, H - 32*mm - th)

    # Intro text
    intro_style = ParagraphStyle('i', fontName='Helvetica', fontSize=10, textColor=TEXT_LIGHT, leading=15)
    intro = Paragraph(
        "Samme slukpotte og teknisk utførelse for alle nivåer. Kun den synlige topp-delen endres ved tilvalg.",
        intro_style
    )
    iw, ih = intro.wrap(content_w, 30*mm)
    intro.drawOn(c, margin, H - 70*mm)

    y = H - 90*mm
    card_h = 55*mm
    card_w = content_w

    levels = [
        ("NIVÅ 1", "Basis", "Hjørnerist i rustfritt stål",
         "Robust og tidløst design som inngår i prosjektets grunnkalkyle. Sikrer en prisgunstig profil og rask fremdrift uten spesialtilpasninger.",
         GRAY_BG, NAVY),
        ("NIVÅ 2", "Plus", "Hjørnerist med Tile Insert",
         "Sluket integreres sømløst med baderommets fliser. En estetisk oppgradering som gir et eksklusivt, nesten usynlig uttrykk uten tekniske endringer.",
         LIGHT_ORANGE_BG, ORANGE),
        ("NIVÅ 3", "Premium", "Eksentrisk slukrenne med Tile Insert",
         "Den ultimate oppgraderingen. Forvandler hjørnesluket til en moderne slukrenne (700-1200 mm). Muliggjør ensidig fall og storformat-fliser uten endring av slukpotten.",
         GRAY_BG, NAVY),
    ]

    for tag, name, subtitle, desc, bg, accent in levels:
        # Card background
        draw_rounded_rect(c, margin, y - card_h, card_w, card_h, 3*mm, fill_color=bg)

        # Orange left accent for "Plus"
        if accent == ORANGE:
            c.setFillColor(ORANGE)
            c.rect(margin, y - card_h, 3*mm, card_h, fill=1, stroke=0)

        # Tag
        c.setFillColor(accent)
        c.setFont("Helvetica-Bold", 8)
        c.drawString(margin + 10*mm, y - 10*mm, tag)

        # Name
        c.setFillColor(NAVY)
        c.setFont("Helvetica-Bold", 16)
        c.drawString(margin + 10*mm, y - 22*mm, f"{name} – {subtitle}")

        # Description
        desc_style = ParagraphStyle('d', fontName='Helvetica', fontSize=9.5, textColor=TEXT_LIGHT, leading=14)
        p = Paragraph(desc, desc_style)
        pw, ph = p.wrap(card_w - 20*mm, 30*mm)
        p.drawOn(c, margin + 10*mm, y - 28*mm - ph)

        y -= card_h + 8*mm

    draw_footer(c, 3)


# ============================================================
# PAGE 4: COMPARISON TABLE
# ============================================================
def page_comparison(c):
    c.setFillColor(NAVY)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(ORANGE)
    c.rect(0, H - 4*mm, W, 4*mm, fill=1, stroke=0)

    margin = 25*mm
    content_w = W - 2 * margin

    # Tag
    c.setFillColor(ORANGE)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(margin, H - 28*mm, "SAMMENLIGNING")

    # Title
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 20)
    c.drawString(margin, H - 48*mm, "Prosjektstandard vs. Slidedrain")

    y = H - 65*mm

    # Table header
    c.setFillColor(HexColor("#344563"))
    c.rect(margin, y - 10*mm, content_w, 10*mm, fill=1, stroke=0)
    c.setFillColor(HexColor("#8899aa"))
    c.setFont("Helvetica-Bold", 8)
    c.drawString(margin + 4*mm, y - 7*mm, "OMRÅDE")
    c.setFillColor(RED)
    c.drawString(margin + 42*mm, y - 7*mm, "TRADISJONELL LØSNING")
    c.setFillColor(GREEN)
    c.drawString(margin + 105*mm, y - 7*mm, "SLIDEDRAIN SLUKSYSTEM")

    y -= 12*mm

    rows = [
        ("Teknisk utførelse", "Ulike løsninger øker risikoen for feilmontasje", "SINTEF TG sikrer identisk tetning på alle bad"),
        ("Endringshåndtering", "Sene endringer krever pigging og omprosjektering", "Standardisering eliminerer avvik og ekstraarbeid"),
        ("Fremdrift", "Designvalg må låses før betongstøp", "Full valgfrihet helt frem til tynnavretting"),
        ("Logistikk", "Ulike løsninger gir uforutsigbar flyt", "Én teknisk standard forenkler hele logistikken"),
        ("Designfleksibilitet", "Kundeendringer krever tilpasninger", "High-end design på basisstandard"),
        ("Salgsvindu", "Kort salgsperiode gir tapt mersalg", "Utvidet vindu maksimerer inntjeningen"),
        ("Prisstrategi", "Låste tilvalg hindrer prisjustering", "Dynamisk prising via kundestyrt etterspørsel"),
        ("Kundetilfredshet", "Standardløsninger møter ikke forventningene", "Eksklusive tilvalg uten kompromisser"),
    ]

    row_h = 22*mm
    for i, (area, trad, slide) in enumerate(rows):
        bg = HexColor("#2e3d54") if i % 2 == 0 else NAVY
        c.setFillColor(bg)
        c.rect(margin, y - row_h, content_w, row_h, fill=1, stroke=0)

        # Area name
        c.setFillColor(WHITE)
        c.setFont("Helvetica-Bold", 9)
        c.drawString(margin + 4*mm, y - 8*mm, area)

        # Traditional (with red X)
        trad_style = ParagraphStyle('tr', fontName='Helvetica', fontSize=8.5, textColor=HexColor("#aa7777"), leading=12)
        tp = Paragraph(f"<font color='#ef4444'>✕</font>  {trad}", trad_style)
        tw, th = tp.wrap(58*mm, row_h)
        tp.drawOn(c, margin + 42*mm, y - 6*mm - th)

        # Slidedrain (with green check)
        slide_style = ParagraphStyle('sl', fontName='Helvetica', fontSize=8.5, textColor=HexColor("#88ccaa"), leading=12)
        sp = Paragraph(f"<font color='#22c55e'>✓</font>  {slide}", slide_style)
        sw, sh = sp.wrap(58*mm, row_h)
        sp.drawOn(c, margin + 105*mm, y - 6*mm - sh)

        y -= row_h

    # Footer on dark bg
    c.setFillColor(HexColor("#8899aa"))
    c.setFont("Helvetica", 7)
    c.drawString(margin, 12*mm, "Slidedrain Sluksystem  |  slidedrain.no  |  post@slidedrain.no")
    c.drawRightString(W - margin, 12*mm, "Side 4 av 6")


# ============================================================
# PAGE 5: LOGISTICS TIMELINE
# ============================================================
def page_logistics(c):
    c.setFillColor(WHITE)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    draw_orange_bar(c, H - 4*mm)

    margin = 30*mm
    content_w = W - 2 * margin

    # Tag
    c.setFillColor(ORANGE)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(margin, H - 28*mm, "LOGISTIKK OG FREMDRIFT")

    # Title
    title_style = ParagraphStyle('t', fontName='Helvetica-Bold', fontSize=22, textColor=NAVY, leading=28)
    t = Paragraph("Fra råbygg til ferdig bad", title_style)
    tw, th = t.wrap(content_w, 50*mm)
    t.drawOn(c, margin, H - 32*mm - th)

    intro_style = ParagraphStyle('i', fontName='Helvetica', fontSize=10, textColor=TEXT_LIGHT, leading=15)
    intro = Paragraph(
        "Slidedrain leveres modulært gjennom Brødrene Dahl og Flisekompaniet. "
        "Det tekniske installeres tidlig, mens det visuelle designvalget holdes åpent så lenge som mulig.",
        intro_style
    )
    iw, ih = intro.wrap(content_w, 40*mm)
    intro.drawOn(c, margin, H - 72*mm)

    y = H - 95*mm

    # Phase 1 header
    draw_rounded_rect(c, margin, y - 10*mm, content_w, 10*mm, 2*mm, fill_color=NAVY)
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(margin + 5*mm, y - 7*mm, "FASE 1: RÅBYGG – BETONG OG RØRFAG")
    y -= 16*mm

    phase1 = [
        ("Prosjektering", "Alle designnivåer tegnes inn uten behov for unik omprosjektering."),
        ("Tilvalg åpnes", "Salgsvinduet for designvalg starter. Ingenting er låst ved støping av dekket."),
        ("Varelevering 1", "Slidedrain slukpotter leveres og installeres av rørlegger før betongstøp."),
    ]

    dot_x = margin + 8*mm
    text_x = margin + 18*mm

    for title, desc in phase1:
        # Timeline dot
        c.setFillColor(ORANGE)
        c.circle(dot_x, y - 2*mm, 3*mm, fill=1, stroke=0)
        # Connecting line
        c.setStrokeColor(HexColor("#e0e0e0"))
        c.setLineWidth(1)
        c.line(dot_x, y - 8*mm, dot_x, y - 22*mm)

        c.setFillColor(NAVY)
        c.setFont("Helvetica-Bold", 10)
        c.drawString(text_x, y, title)

        desc_s = ParagraphStyle('d', fontName='Helvetica', fontSize=9, textColor=TEXT_LIGHT, leading=13)
        p = Paragraph(desc, desc_s)
        pw, ph = p.wrap(content_w - 22*mm, 20*mm)
        p.drawOn(c, text_x, y - 6*mm - ph)
        y -= 24*mm

    # Gap indicator
    draw_rounded_rect(c, margin + 15*mm, y - 8*mm, content_w - 30*mm, 12*mm, 2*mm, fill_color=LIGHT_ORANGE_BG)
    c.setFillColor(ORANGE)
    c.setFont("Helvetica-Bold", 9)
    c.drawCentredString(W/2, y - 4*mm, "FLERE MÅNEDER GÅR")
    y -= 22*mm

    # Phase 2 header
    draw_rounded_rect(c, margin, y - 10*mm, content_w, 10*mm, 2*mm, fill_color=NAVY)
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(margin + 5*mm, y - 7*mm, "FASE 2: INNREDNING – TILVALG OG FLISLEGGING")
    y -= 16*mm

    phase2 = [
        ("Tilvalg stenges", "Endelig design med hjørnerist eller slukrenne låses når badet er klart for tynnavretting."),
        ("Varelevering 2", "Valgt hjørnerist/slukrenne, slukoverdel og monteringsverktøy leveres."),
        ("Flislegging", "Flislegger støper fall, monterer slukoverdel og kundens valgte design feilfritt."),
    ]

    for title, desc in phase2:
        c.setFillColor(ORANGE)
        c.circle(dot_x, y - 2*mm, 3*mm, fill=1, stroke=0)
        c.setStrokeColor(HexColor("#e0e0e0"))
        c.setLineWidth(1)
        c.line(dot_x, y - 8*mm, dot_x, y - 22*mm)

        c.setFillColor(NAVY)
        c.setFont("Helvetica-Bold", 10)
        c.drawString(text_x, y, title)

        desc_s = ParagraphStyle('d', fontName='Helvetica', fontSize=9, textColor=TEXT_LIGHT, leading=13)
        p = Paragraph(desc, desc_s)
        pw, ph = p.wrap(content_w - 22*mm, 20*mm)
        p.drawOn(c, text_x, y - 6*mm - ph)
        y -= 24*mm

    # Tip box
    draw_rounded_rect(c, margin, y - 5*mm, content_w, 22*mm, 3*mm, fill_color=GRAY_BG)
    tip_style = ParagraphStyle('tip', fontName='Helvetica', fontSize=8.5, textColor=TEXT_LIGHT, leading=12)
    tip = Paragraph(
        "<b>Fleksibel logistikk:</b> Monteringsverktøy og slukoverdel kan inkluderes i Varelevering 1 "
        "for en samlet leveranse av alt teknisk utstyr til rørfaget fra start.",
        tip_style
    )
    tipw, tiph = tip.wrap(content_w - 12*mm, 20*mm)
    tip.drawOn(c, margin + 6*mm, y + 12*mm - tiph)

    draw_footer(c, 5)


# ============================================================
# PAGE 6: TRUST & CTA
# ============================================================
def page_cta(c):
    c.setFillColor(WHITE)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    draw_orange_bar(c, H - 4*mm)

    margin = 30*mm
    content_w = W - 2 * margin

    # Tag
    c.setFillColor(ORANGE)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(margin, H - 28*mm, "GODKJENT OG TILGJENGELIG")

    # Title
    c.setFillColor(NAVY)
    c.setFont("Helvetica-Bold", 22)
    c.drawString(margin, H - 48*mm, "Trygg implementering")

    y = H - 65*mm

    trust_items = [
        ("SINTEF Teknisk Godkjenning (TG 20991)",
         "Slidedrain tilfredsstiller alle krav i TEK17 og er grundig testet og dokumentert av SINTEF."),
        ("Lagerført hos 80+ utsalgssteder",
         "Alt teknisk utstyr er lagerført hos Brødrene Dahl og Flisekompaniet for rask levering til byggeplass."),
        ("Norskprodusert med EPD",
         "Produsert i Norge av 100 % resirkulert plast, med full miljødokumentasjon for prosjekter med miljøkrav (BREEAM)."),
    ]

    for title, desc in trust_items:
        # Card
        draw_rounded_rect(c, margin, y - 30*mm, content_w, 30*mm, 3*mm, fill_color=GRAY_BG)

        # Orange left accent
        c.setFillColor(ORANGE)
        c.rect(margin, y - 30*mm, 3*mm, 30*mm, fill=1, stroke=0)

        # Check icon
        c.setFillColor(GREEN)
        c.setFont("Helvetica-Bold", 14)
        c.drawString(margin + 8*mm, y - 14*mm, "✓")

        c.setFillColor(NAVY)
        c.setFont("Helvetica-Bold", 11)
        c.drawString(margin + 18*mm, y - 12*mm, title)

        desc_s = ParagraphStyle('d', fontName='Helvetica', fontSize=9, textColor=TEXT_LIGHT, leading=13)
        p = Paragraph(desc, desc_s)
        pw, ph = p.wrap(content_w - 22*mm, 20*mm)
        p.drawOn(c, margin + 18*mm, y - 16*mm - ph)

        y -= 36*mm

    # CTA Section
    y -= 10*mm
    cta_h = 60*mm
    draw_rounded_rect(c, margin, y - cta_h, content_w, cta_h, 4*mm, fill_color=NAVY)

    # CTA content
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 16)
    c.drawCentredString(W/2, y - 18*mm, "Klar for et mer lønnsomt tilvalgskonsept?")

    c.setFillColor(HexColor("#8899aa"))
    c.setFont("Helvetica", 10)
    c.drawCentredString(W/2, y - 32*mm, "Vi tar gjerne en 15-minutters uforpliktende gjennomgang")
    c.drawCentredString(W/2, y - 44*mm, "for å se på ditt konkrete prosjekt.")

    # CTA button
    btn_w = 70*mm
    btn_h = 12*mm
    btn_x = W/2 - btn_w/2
    btn_y = y - cta_h + 6*mm
    draw_rounded_rect(c, btn_x, btn_y, btn_w, btn_h, 2*mm, fill_color=ORANGE)
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 10)
    c.drawCentredString(W/2, btn_y + 3.5*mm, "Book 15 min videokonsultasjon")

    # Contact info below
    y = y - cta_h - 12*mm
    c.setFillColor(TEXT_LIGHT)
    c.setFont("Helvetica", 9)
    c.drawCentredString(W/2, y, "post@slidedrain.no  |  slidedrain.no")
    c.drawCentredString(W/2, y - 12*mm, "Ingen salgs-pitch – kun teknisk og økonomisk gjennomgang")

    draw_footer(c, 6)


# ============================================================
# GENERATE PDF
# ============================================================
def main():
    c = canvas.Canvas(OUTPUT, pagesize=A4)
    c.setTitle("Slidedrain Prosjektmappe")
    c.setAuthor("Slidedrain AS")
    c.setSubject("Prosjektmappe for byggherrer og entreprenører")

    page_cover(c)
    c.showPage()

    page_benefits(c)
    c.showPage()

    page_tilvalg(c)
    c.showPage()

    page_comparison(c)
    c.showPage()

    page_logistics(c)
    c.showPage()

    page_cta(c)
    c.showPage()

    c.save()
    print(f"PDF generated: {OUTPUT}")


if __name__ == "__main__":
    main()

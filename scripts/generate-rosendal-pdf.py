#!/usr/bin/env python3
"""Generate Rosendal Bygg customer story PDF."""

import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor, white
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Image, Table, TableStyle,
    PageBreak, HRFlowable
)

# Colors
NAVY = HexColor("#1a2536")
ORANGE = HexColor("#FB5C13")
TEXT_LIGHT = HexColor("#6b7a8d")
GRAY_BG = HexColor("#f5f6f8")

# Paths
BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG_DIR = os.path.join(BASE, "public", "images", "kundehistorier")
OUT_DIR = os.path.join(BASE, "public", "downloads")
os.makedirs(OUT_DIR, exist_ok=True)
OUTPUT = os.path.join(OUT_DIR, "slidedrain-kundehistorie-rosendal-bygg.pdf")

PAGE_W, PAGE_H = A4
MARGIN = 25 * mm

styles = {
    "title": ParagraphStyle("title", fontName="Helvetica-Bold", fontSize=28, leading=34, textColor=NAVY, spaceAfter=6*mm),
    "h2": ParagraphStyle("h2", fontName="Helvetica-Bold", fontSize=20, leading=26, textColor=NAVY, spaceAfter=4*mm, spaceBefore=2*mm),
    "body": ParagraphStyle("body", fontName="Helvetica", fontSize=10.5, leading=17, textColor=HexColor("#4a5568"), spaceAfter=4*mm),
    "quote": ParagraphStyle("quote", fontName="Helvetica-Oblique", fontSize=12, leading=19, textColor=NAVY, leftIndent=8*mm, spaceAfter=2*mm),
    "cite": ParagraphStyle("cite", fontName="Helvetica", fontSize=9, leading=12, textColor=TEXT_LIGHT, leftIndent=8*mm, spaceAfter=6*mm),
    "caption": ParagraphStyle("caption", fontName="Helvetica-Oblique", fontSize=9, leading=13, textColor=TEXT_LIGHT, alignment=TA_CENTER, spaceAfter=6*mm),
    "badge": ParagraphStyle("badge", fontName="Helvetica-Bold", fontSize=9, leading=12, textColor=ORANGE, spaceAfter=3*mm),
    "small": ParagraphStyle("small", fontName="Helvetica", fontSize=9, leading=13, textColor=TEXT_LIGHT),
    "problem_item": ParagraphStyle("problem_item", fontName="Helvetica", fontSize=10, leading=15, textColor=white, spaceAfter=3*mm),
}


def add_image(story, filename, width=None):
    path = os.path.join(IMG_DIR, filename)
    if not os.path.exists(path):
        story.append(Paragraph(f"[Image: {filename}]", styles["caption"]))
        return
    img_w = width or (PAGE_W - 2 * MARGIN)
    img = Image(path, width=img_w, height=img_w * 0.5625)
    img.hAlign = "CENTER"
    story.append(img)
    story.append(Spacer(1, 3*mm))


def add_quote(story, text, attribution):
    story.append(HRFlowable(width="3", thickness=3, color=ORANGE, spaceAfter=0, spaceBefore=2*mm, hAlign="LEFT"))
    story.append(Paragraph(f"\u201c{text}\u201d", styles["quote"]))
    story.append(Paragraph(f"\u2014 {attribution}", styles["cite"]))


def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(TEXT_LIGHT)
    canvas.drawCentredString(PAGE_W/2, 15*mm, "Slidedrain AS  |  slidedrain.no  |  post@slidedrain.no")
    canvas.drawRightString(PAGE_W - MARGIN, 15*mm, f"Side {doc.page}")
    canvas.restoreState()


def build_pdf():
    doc = SimpleDocTemplate(OUTPUT, pagesize=A4, leftMargin=MARGIN, rightMargin=MARGIN, topMargin=20*mm, bottomMargin=25*mm)
    story = []

    # --- PAGE 1: Hero ---
    story.append(Paragraph("KUNDEHISTORIE", styles["badge"]))
    story.append(Paragraph(
        'Rosendal Bygg sparer tid og kostnader <font color="#FB5C13">med Slidedrain</font>',
        styles["title"]
    ))
    story.append(Paragraph(
        "N\u00e5r et detaljbesatt t\u00f8mrerfirma i Trondheim har en r\u00f8rlegger "
        "som er lidenskapelig opptatt av arkitektur, blir resultatet eksepsjonelt. "
        "Se hvordan Ole Brehme Olsen og Rosendal Bygg bruker Slidedrain til \u00e5 "
        "levere premium baderomsopplevelser \u2013 uten kompromisser.",
        styles["body"]
    ))
    story.append(Paragraph(
        "<b>Ole Brehme Olsen</b> \u2013 R\u00f8rlegger i Rosendal Bygg, medlem av VVS Fagmann",
        styles["small"]
    ))
    story.append(Spacer(1, 4*mm))

    add_image(story, "rosendal-2.jpg")

    # Intro
    story.append(Paragraph("Byggmesterbedrift i Trondheim", styles["h2"]))
    story.append(Paragraph(
        "Rosendal Bygg er en byggmester- og r\u00f8rleggerbedrift fra Trondheim "
        "som spesialiserer seg p\u00e5 rehabilitering og oppgradering av eldre "
        "boliger. Prosjektene deres kjennetegnes av en kompromissl\u00f8s "
        "oppmerksomhet p\u00e5 detaljer \u2013 fra listverk som er smalere enn "
        "standard til n\u00f8ye koordinert materialvalg gjennom hele boligen.",
        styles["body"]
    ))
    story.append(Paragraph(
        "N\u00e5r kvalitetskravene er s\u00e5 h\u00f8ye, trengs det "
        "h\u00e5ndverkere som matcher ambisjonsniv\u00e5et. Ole Brehme Olsen "
        "er r\u00f8rleggeren i Rosendal Bygg og medlem av VVS Fagmann \u2013 "
        "en fagmann som er ekspert p\u00e5 \u00e5 visualisere detaljer, b\u00e5de "
        "faglig og tverrfaglig.",
        styles["body"]
    ))

    add_quote(story,
        "Jeg pr\u00f8ver alltid \u00e5 overg\u00e5 mine tidligere utf\u00f8relser, "
        "p\u00e5 et eller annet niv\u00e5.",
        "Ole Brehme Olsen, r\u00f8rlegger i Rosendal Bygg"
    )

    # --- PAGE 2: Challenge ---
    story.append(PageBreak())
    story.append(Paragraph("Bjelkelag, design og vedlikehold", styles["h2"]))
    story.append(Paragraph(
        "Rosendal Byggs prosjekter er ofte eldre boliger der bjelkelaget i gulvet "
        "setter begrensninger for hvor sluket kan plasseres. Kundene \u00f8nsker "
        "gjerne tile insert-design med storformatfliser, men tradisjonelle linjesluk "
        "kan skape utfordringer \u2013 b\u00e5de under og etter montasje.",
        styles["body"]
    ))
    story.append(Paragraph(
        "Med standard sirkul\u00e6rsluk f\u00e5r man et produkt som tar unna "
        "vannet og er s\u00e6rdeles enkelt \u00e5 vedlikeholde. Med slukrist fra "
        "Slidedrain f\u00e5r man fleksibilitet ved montering og i tillegg et "
        "flott design.",
        styles["body"]
    ))

    add_image(story, "rosendal-3.jpg")
    story.append(Paragraph(
        "Ole med Slidedrain slukpotte p\u00e5 byggeplassen \u2013 klar for "
        "installasjon i neste bad.",
        styles["caption"]
    ))

    # Problem box
    content = []
    content.append(Paragraph("Problemet med tradisjonelle linjesluk", ParagraphStyle(
        "pb_title", fontName="Helvetica-Bold", fontSize=14, leading=18, textColor=white, spaceAfter=3*mm
    )))
    for item in [
        "Designet er s\u00e5 smalt at det tettes mye raskere enn store vannl\u00e5ser p\u00e5 vanlige sirkul\u00e6re sluk.",
        "For komplisert for sluttkunden \u00e5 vedlikeholde \u2013 ikke for en h\u00e5ndverker, men for den vanlige mannen i gata.",
        "Kan resultere i telefoner om lukt og tett avl\u00f8p kort tid etter overlevering.",
    ]:
        content.append(Paragraph(f"\u2716  {item}", styles["problem_item"]))

    t = Table([[content]], colWidths=[PAGE_W - 2*MARGIN])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), NAVY),
        ("ROUNDEDCORNERS", [8,8,8,8]),
        ("LEFTPADDING", (0,0), (-1,-1), 20),
        ("RIGHTPADDING", (0,0), (-1,-1), 20),
        ("TOPPADDING", (0,0), (-1,-1), 20),
        ("BOTTOMPADDING", (0,0), (-1,-1), 20),
    ]))
    story.append(t)
    story.append(Spacer(1, 6*mm))

    # Solution text
    story.append(Paragraph(
        "Med Slidedrain kan de legge et sirkul\u00e6rt gulvsluk inntil vegg og "
        "ha slukrenne med tile insert over.",
        ParagraphStyle("solution_highlight", fontName="Helvetica-Bold", fontSize=11, leading=16, textColor=NAVY, spaceAfter=4*mm)
    ))

    # --- PAGE 3: Result ---
    story.append(PageBreak())

    add_image(story, "rosendal-4.jpg")
    story.append(Paragraph(
        "Ole plasserer slukrennen med tile insert over det sirkul\u00e6re "
        "gulvsluket \u2013 linjesluk-look med sirkul\u00e6rt sluk under.",
        styles["caption"]
    ))

    story.append(Paragraph("Resultatet", styles["h2"]))
    story.append(Paragraph(
        "Resultatet er bad som forener Rosendal Byggs kompromissl\u00f8se krav "
        "til kvalitet med en teknisk l\u00f8sning som faktisk fungerer i hverdagen. "
        "Storformatfliser med tile insert gir et stilrent uttrykk, mens den store "
        "vannl\u00e5sen eliminerer vedlikeholdsproblemene som plaget tradisjonelle "
        "linjesluk.",
        styles["body"]
    ))

    add_quote(story,
        "Det er enkelt \u00e5 rengj\u00f8re vannl\u00e5sen og det er enkelt "
        "\u00e5 sette den tilbake.",
        "Ole Brehme Olsen, r\u00f8rlegger i Rosendal Bygg"
    )

    # Solution cards
    cards_data = [
        ("Fleksibel plassering",
         "Den eksentriske varianten lar sluket plasseres uavhengig av "
         "bjelkelag og armaturplassering."),
        ("Storformatflis med ensidig fall",
         "Ensidig fall med storformatfliser gir f\u00e6rre fuger, enklere "
         "rengj\u00f8ring og et moderne uttrykk."),
        ("Enklere vedlikehold",
         "Stor vannl\u00e5s som tettes sjeldnere enn linjesluk. Enkel "
         "\u00e5 rengj\u00f8re for sluttkunden."),
    ]
    card_cells = []
    for title, desc in cards_data:
        card_cells.append([
            Paragraph(f"<b>{title}</b>", ParagraphStyle(
                "ct", fontName="Helvetica-Bold", fontSize=10, leading=14,
                textColor=NAVY, spaceAfter=2*mm, alignment=TA_CENTER
            )),
            Paragraph(desc, ParagraphStyle(
                "cd", fontName="Helvetica", fontSize=9, leading=13,
                textColor=TEXT_LIGHT, alignment=TA_CENTER
            ))
        ])

    col_w = (PAGE_W - 2*MARGIN - 8*mm) / 3
    t = Table([card_cells], colWidths=[col_w, col_w, col_w], spaceBefore=2*mm)
    t.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), GRAY_BG),
        ("ROUNDEDCORNERS", [6,6,6,6]),
        ("LEFTPADDING", (0,0), (-1,-1), 10),
        ("RIGHTPADDING", (0,0), (-1,-1), 10),
        ("TOPPADDING", (0,0), (-1,-1), 14),
        ("BOTTOMPADDING", (0,0), (-1,-1), 14),
        ("VALIGN", (0,0), (-1,-1), "TOP"),
    ]))
    story.append(t)

    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    print(f"PDF generated: {OUTPUT}")


if __name__ == "__main__":
    build_pdf()

# import pygame
# import pytmx

# # Carregar o mapa
# tmx_data = pytmx.load_pygame("mapa.tmx")

# # Criar uma lista de colisões
# collision_objects = []
# for obj in tmx_data.objects:
#     if obj.name == "colisao":  # Nome que demos no Tiled
#         rect = pygame.Rect(obj.x, obj.y, obj.width, obj.height)
#         collision_objects.append(rect)

# # Função para verificar se o personagem está colidindo com algo
# def check_collision(player_rect):
#     for obj in collision_objects:
#         if player_rect.colliderect(obj):
#             return True
#     return False

import pygame
import os
import pytmx

# Função para carregar o mapa do Tiled
def load_map(filename):
    return pytmx.load_pygame(filename)

# Função para desenhar o mapa
def draw_map(surface, tmx_data):
    for layer in tmx_data.visible_layers:
        if isinstance(layer, pytmx.TiledTileLayer):
            for x, y, gid in layer:
                tile = tmx_data.get_tile_image_by_gid(gid)
                if tile:
                    surface.blit(tile, (x * tmx_data.tilewidth, y * tmx_data.tileheight))

def main():
    pygame.init()
    
    screen_width, screen_height = 800, 600
    screen = pygame.display.set_mode((screen_width, screen_height))
    pygame.display.set_caption("Tiled Map with Background")

    # Verifica se o arquivo de fundo existe
    if not os.path.exists("background.png"):
        print("Erro: Arquivo 'background.png' não encontrado!")
        return
    
    # Carrega a imagem de fundo
    background = pygame.image.load("background.png").convert()
    background = pygame.transform.scale(background, (screen_width, screen_height))

    # Verifica se o mapa existe
    if not os.path.exists("map.tmx"):
        print("Erro: Arquivo 'map.tmx' não encontrado!")
        return

    # Carrega o mapa do Tiled
    tmx_data = load_map("map.tmx")
    map_surface = pygame.Surface((tmx_data.width * tmx_data.tilewidth, tmx_data.height * tmx_data.tileheight))
    draw_map(map_surface, tmx_data)

    clock = pygame.time.Clock()
    running = True

    while running:
        print("Rodando...")  # Debug para ver se o loop está ativo

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False

        screen.blit(background, (0, 0))  # Desenha o fundo
        screen.blit(map_surface, (0, 0))  # Desenha o mapa

        pygame.display.flip()
        clock.tick(60)  # Mantém o jogo rodando a 60 FPS

    pygame.quit()

if __name__ == "__main__":
    main()

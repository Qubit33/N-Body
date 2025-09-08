#version 300 es
precision highp float;
precision highp sampler2D;

in vec2 v_uv;
out vec4 outColor;

uniform sampler2D u_pos;
uniform sampler2D u_vel;
uniform float u_dt;

void main() {
    vec4 posVel = texture(u_pos, v_uv); // RG: posição x,y
    vec4 velVel = texture(u_vel, v_uv); // RG: velocidade x,y

    vec2 pos = posVel.xy;
    vec2 vel = velVel.xy;

    float r = length(pos) + 1e-6;
    vec2 acc = -pos / (r*r*0.1);

    vel += acc * u_dt;
    pos += vel * u_dt;

    if (r > 5.0) { // limite para evitar que partículas voem para longe
        pos *= 0.5;
        vel *= -0.3;
    }

    outColor = vec4(pos, vel); // retorna posição e velocidade
}